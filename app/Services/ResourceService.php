<?php

namespace App\Services;

use App\Models\Resource;

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
        dd($resourceId, $resourceData);
        $resource = $this->mResource->findOrFail($resourceId);
        $resource->update([
            'title' => $resourceData['title'],
            'type' => $resourceData['type'],
            // Si tienes un archivo, asegúrate de manejarlo aquí:
            // 'file' => $this->handleFileUpload($resourceData['file']),
        ]);
    }

    /**
     * Crear un nuevo recurso.
     */
    public function createResource($lessonId, $resourceData)
    {
        $this->mResource->create([
            'lesson_id' => $lessonId,
            'title' => $resourceData['title'],
            'type' => $resourceData['type'],
            // Si tienes un archivo, asegúrate de manejarlo aquí:
            // 'file' => $this->handleFileUpload($resourceData['file']),
        ]);
    }

    /**
     * Manejar la subida de archivos.
     */
    public function handleFileUpload($file)
    {
        // Lógica para subir el archivo, por ejemplo a S3:
        if ($file) {
            return $file->store('resources', 's3'); // Subir a S3 (o al sistema de almacenamiento que uses)
        }

        return null;
    }
}
