<?php

namespace App\Services;

use App\Models\Resource;
use Illuminate\Support\Facades\Storage;


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
        $fileDetails = $this->handleFileUpload($resourceData['file']);

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
    public function handleFileUpload($file)
    {
        // Subir el archivo a S3 y obtener la ruta
        $filePath = $file->store('resources', 's3');  // 'resources' es la carpeta en S3 donde se guardará el archivo

        // Obtener la URL pública del archivo
        $url = Storage::disk('s3')->url($filePath);

        // Obtener la clave (key) del archivo en S3
        $s3Key = $filePath;

        // Obtener el tamaño y el tipo MIME del archivo
        $size = $file->getSize();
        $mimeType = $file->getMimeType();

        // Devolver toda la información relevante
        return [
            'url' => $url,
            's3_key' => $s3Key,
            'size' => $size,
            'mime_type' => $mimeType,
        ];
    }

    public function syncResources($lessonId, $newResources)
    {
        // Obtener todos los recursos actuales de la lección
        $existingResources = $this->mResource->where('lesson_id', $lessonId)->get();

        // Extraer los IDs de los nuevos recursos enviados en la solicitud
        $newResourceIds = collect($newResources)->pluck('id')->filter()->all();  // Filtra los IDs no nulos

        // Eliminar los recursos que no están en la nueva solicitud
        $existingResources->each(function ($resource) use ($newResourceIds) {
            if (!in_array($resource->id, $newResourceIds)) {
                // Eliminar el recurso de la base de datos y de S3 si no está en la nueva lista
                $this->deleteResource($resource);
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

    public function deleteResource($resource)
    {
        // Eliminar el archivo de S3
        Storage::disk('s3')->delete($resource->s3_key);
        // Eliminar el recurso de la base de datos
        $resource->delete();
    }
}
