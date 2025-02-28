<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Session;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Autenticar usuario
        $request->authenticate();

        // Regenerar la sesión para evitar fijación de sesión
        $request->session()->regenerate();

        // Obtener el usuario autenticado
        $user = Auth::user();

        // Si el usuario tiene el rol de estudiante
        if ($user->hasRole('student')) {
            // Asignar la nueva sesión activa al usuario
            $user->session_id = Session::getId();
            $user->save();

            // Redirigir al dashboard para estudiantes
            return redirect()->intended(route('dashboard.student', absolute: false));
        }

        // Si el usuario tiene el rol de admin
        if ($user->hasRole('admin')) {
            // Redirigir al dashboard para admin (sin verificar sesiones activas)
            return redirect()->intended(route('dashboard', absolute: false));
        }

        // Si no tiene un rol válido, redirigir a una ruta por defecto
        return redirect('/');
    }


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Obtener el usuario autenticado
        $user = Auth::user();
        if ($user) {
            // Limpiar el campo session_id del usuario
            $user->session_id = null;
            $user->save();
        }
        // Cerrar la sesión del usuario
        Auth::guard('web')->logout();
        // Invalidar la sesión actual
        $request->session()->invalidate();
        // Regenerar el token CSRF para mayor seguridad
        $request->session()->regenerateToken();
        // Redirigir al usuario a la página principal
        return redirect('/');
    }
}
