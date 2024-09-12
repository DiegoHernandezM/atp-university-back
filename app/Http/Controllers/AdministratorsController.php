<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdministratorsRequest;
use App\Services\AdministratorService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

use function Termwind\render;

class AdministratorsController extends Controller
{
    public function get(AdministratorService $service)
    {
        try {
            $users = $service->getAdministrators();
            return Inertia::render('Administrators/Index', [
                'users' => $users
            ]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }

    public function find($id, AdministratorService $service)
    {

    }

    public function store(AdministratorsRequest $request, AdministratorService $service)
    {
        try {
            $validated = $request->validated();
            $service->createAdministrator($validated);
            session()->flash('success', 'Administrador creado correctamente.');
            return redirect()->route('administrators.get');
        } catch(\Exception $e) {
            return redirect()->route('administrators.get')->withErrors(['error' => 'Hubo un problema al crear el administrador. Inténtalo de nuevo.']);
        }

    }

    public function update(AdministratorsRequest $request, User $user, AdministratorService $service)
    {
        try {
            $validated = $request->validated();
            /*
            if ($request->filled('password')) {
                $validated['password'] = Hash::make($validated['password']);
            } else {
                unset($validated['password']);
            }
            $repository->updateUser($user, $validated);

            return redirect()->route('users.list')->with('success', 'Administrador actualizado correctamente.');
            */
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

}
