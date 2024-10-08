<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResourceRequest;
use App\Models\Lesson;
use App\Services\ResourceService;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    public function store(ResourceRequest $request, ResourceService $service, $lesson_id)
    {
        dd('entro');
        try {
            dd('entro');
            // Obtener los datos validados del request
            $validatedData = $request->validated();
            dd($validatedData);
            $resources = $validatedData['resources'];

            // Iterar sobre los recursos y llamamos a la lógica de almacenamiento/actualización en el servicio
            foreach ($resources as $resource) {
                if (isset($resource['id'])) {
                    // Si existe el ID, actualizar el recurso existente
                    $service->updateResource($resource['id'], $resource);
                } else {
                    // Crear un nuevo recurso
                    $service->createResource($lesson->id, $resource);
                }
            }

            return redirect()->back();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(ResourceRequest $request, Lesson $lesson, ResourceService $service) {}

    public function destroy(Lesson $lesson, ResourceService $service) {}
}
