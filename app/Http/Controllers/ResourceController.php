<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResourceRequest;
use App\Models\Lesson;
use App\Services\ResourceService;
use Illuminate\Http\Request;


class ResourceController extends Controller
{

    public function store(ResourceRequest $request, ResourceService $service)
    {
        try {
            // Obtener los datos validados del request
            $validatedData = $request->validated();
            $resources = $validatedData['resources'] ?? [];
            // Llamar a la función syncResources para crear, actualizar y eliminar recursos
            $service->syncResources($validatedData['lesson_id'], $resources);
            return redirect()->back();
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
    }


    public function update(ResourceRequest $request, Lesson $lesson, ResourceService $service) {}

    public function destroy(Lesson $lesson, ResourceService $service) {}
}
