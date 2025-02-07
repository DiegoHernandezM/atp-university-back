<?php

namespace App\Services;

use App\Models\Resource;
use App\Models\StudentResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ResourceService
{

    protected $mResource;

    public function __construct()
    {
        $this->mResource = new Resource();
    }

    /**
     * Actualizar un recurso existente.
     */
    public function updateResource($resourceId, $resourceData)
    {
        $resource = $this->mResource->findOrFail($resourceId);

        // Verificar si se ha enviado un archivo nuevo
        if (isset($resourceData['file'])) {
            // Subir el nuevo archivo y obtener los detalles
            $fileDetails = $this->handleFileUpload($resourceData['file']);

            // Actualizar los campos relacionados con el archivo
            $resource->update([
                'title' => $resourceData['title'],
                'type' => $resourceData['type'],
                'url' => $fileDetails['url'],          // Nueva URL
                's3_key' => $fileDetails['s3_key'],    // Nueva clave S3
                'size' => $fileDetails['size'],        // Nuevo tamaño
                'mime_type' => $fileDetails['mime_type'],  // Nuevo tipo MIME
            ]);
        } else {
            // Solo actualizar los campos que no dependen del archivo
            $resource->update([
                'title' => $resourceData['title'],
                'type' => $resourceData['type'],
            ]);
        }
    }

    /**
     * Crear un nuevo recurso.
     */
    public function createResource($lessonId, $resourceData)
    {
        // Llamamos a handleFileUpload para manejar el archivo y obtener los detalles del archivo
        $fileDetails = $this->handleFileUpload($resourceData['file'], $resourceData['type']);

        // Crear el recurso en la base de datos con los datos obtenidos
        $this->mResource->create([
            'lesson_id' => $lessonId,
            'title' => $resourceData['title'],
            'type' => $resourceData['type'],
            'url' => $fileDetails['url'],         // URL pública del archivo en S3
            's3_key' => $fileDetails['s3_key'],   // Clave del archivo en S3
            'size' => $fileDetails['size'],       // Tamaño del archivo
            'mime_type' => $fileDetails['mime_type'],  // Tipo MIME del archivo
        ]);
    }

    /**
     * Manejar la subida de archivos.
     */
    public function handleFileUpload($file, $type = null)
    {
        if ($type === 'zip') {
            $a = $this->handleGeniallyUpload($file);
            return $a;
        }

        // Subida normal a S3
        $path = $file->store('resources', 's3');
        return [
            'url' => Storage::disk('s3')->url($path),
            's3_key' => $path,
            'size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
        ];
    }

    public function handleGeniallyUpload($file)
    {
        $zip = new \ZipArchive();
        $uniqueFolder = Str::random(10); // Nombre único para la carpeta
        $resourceFolder = 'resources/genially/' . $uniqueFolder; // Carpeta en S3 donde se suben los archivos descomprimidos

        // Ruta local para guardar el ZIP temporalmente
        $zipPath = $file->storeAs('temp', $file->getClientOriginalName());
        $zipFullPath = storage_path('app/' . $zipPath);

        // Intentamos abrir el archivo ZIP
        if ($zip->open($zipFullPath) === true) {
            // Ruta local donde descomprimimos el ZIP
            $tempExtractPath = storage_path('app/temp/' . Str::random(10)); // Usamos una ruta clara para descomprimir
            // Aseguramos que la carpeta de extracción exista
            if (!is_dir($tempExtractPath)) {
                mkdir($tempExtractPath, 0777, true);
            }
            $zip->extractTo($tempExtractPath); // Descomprimir en la ruta temporal
            $zip->close();
        } else {
            throw new \Exception("Error al descomprimir el archivo ZIP.");
        }

        //Storage::delete($zipPath);

        // Función recursiva para subir archivos y carpetas a S3
        $this->uploadFilesRecursively($tempExtractPath, $resourceFolder);

        // Buscar el archivo principal 'genially.html'
        $htmlFile = $this->findHtmlFile($tempExtractPath);

        if (!$htmlFile) {
            throw new \Exception("Archivo genially.html no encontrado.");
        }

        // Obtener la URL pública del archivo 'genially.html' en S3
        $htmlS3Path = Storage::disk('s3')->url($resourceFolder . '/' . basename($htmlFile));

        // Limpiar los archivos temporales locales después de subirlos a S3
        $this->deleteDirectoryRecursively($tempExtractPath);
        return [
            'url' => $htmlS3Path, // URL pública del archivo genially.html
            's3_key' => $resourceFolder . '/' . basename($htmlFile), // Ruta relativa en S3
            'size' => filesize($zipFullPath), // Tamaño del archivo ZIP original (opcional)
            'mime_type' => 'text/html', // MIME tipo del archivo genially.html
        ];
    }

    private function deleteDirectoryRecursively($directory)
    {
        // Asegurarse de que el directorio exista
        if (is_dir($directory)) {
            // Obtener todos los archivos y subdirectorios
            $files = array_diff(scandir($directory), array('.', '..'));

            // Eliminar todos los archivos y subdirectorios
            foreach ($files as $file) {
                $filePath = $directory . DIRECTORY_SEPARATOR . $file;
                if (is_dir($filePath)) {
                    // Llamar recursivamente si es un subdirectorio
                    $this->deleteDirectoryRecursively($filePath);
                } else {
                    // Eliminar el archivo
                    unlink($filePath);
                }
            }

            // Finalmente eliminar el directorio
            rmdir($directory);
        }
    }

    private function uploadFilesRecursively($localPath, $s3Folder)
    {
        $files = scandir($localPath);

        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..') {
                $localFilePath = $localPath . '/' . $file;
                $s3FilePath = $s3Folder . '/' . $file;

                if (is_dir($localFilePath)) {
                    // Si es una carpeta, llamamos recursivamente
                    $this->uploadFilesRecursively($localFilePath, $s3FilePath);
                } else {
                    // Si es un archivo, lo subimos a S3
                    Storage::disk('s3')->put($s3FilePath, file_get_contents($localFilePath));
                }
            }
        }
    }

    private function findHtmlFile($directory)
    {
        $files = scandir($directory);
        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..') {
                $filePath = $directory . '/' . $file;
                if (is_dir($filePath)) {
                    $htmlFile = $this->findHtmlFile($filePath);
                    if ($htmlFile) {
                        return $htmlFile;
                    }
                } elseif (Str::endsWith($file, 'genially.html')) {
                    return $filePath;
                }
            }
        }
        return null;
    }


    public function syncResources($lessonId, $newResources)
    {
        // Obtener todos los recursos actuales de la lección
        $existingResources = $this->mResource->where('lesson_id', $lessonId)->get();
        if (count($newResources) === 0) {
            foreach ($existingResources as $resource) {
                $this->deleteResource($resource->id);
            }
        }
        // Extraer los IDs de los nuevos recursos enviados en la solicitud
        $newResourceIds = collect($newResources)->pluck('id')->filter()->all();  // Filtra los IDs no nulos

        // Eliminar los recursos que no están en la nueva solicitud
        $existingResources->each(function ($resource) use ($newResourceIds) {
            if (!in_array($resource->id, $newResourceIds)) {
                // Eliminar el recurso de la base de datos y de S3 si no está en la nueva lista
                $this->deleteResource($resource->id);
            }
        });

        // Luego de eliminar los recursos no incluidos, puedes proceder a crear/actualizar los nuevos recursos
        foreach ($newResources as $resourceData) {
            if (isset($resourceData['id'])) {
                // Si el recurso ya existe, actualizarlo
                $this->updateResource($resourceData['id'], $resourceData);
            } else {
                // Si no existe, crear un nuevo recurso
                $this->createResource($lessonId, $resourceData);
            }
        }
    }

    public function deleteResource($id)
    {
        $resource = $this->mResource->find($id);
        // Eliminar el archivo de S3
        Storage::disk('s3')->delete($resource->s3_key);
        // Eliminar el recurso de la base de datos
        $resource->delete();
    }

    public function saveProgress($data)
    {
        $student = auth()->user()->student;
        if (!empty($student)) {
            $resource = Resource::find($data['resourceId']);
            $column = $resource->mime_type == 'application/pdf' ? 'pageProgress' : 'videoProgress';
            $sr = StudentResource::where(['student_id' => $student->id, 'resource_id' => $data['resourceId']])->first();
            if ($sr->$column != $data['progress']) {
                $sr->update([$column => $data['progress']]);
            }
        }
    }
}
