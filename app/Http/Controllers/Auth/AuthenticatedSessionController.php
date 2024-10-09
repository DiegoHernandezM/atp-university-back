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
        // Redirigir según el rol del usuario
        if ($user->hasRole('admin')) {
            // Redirigir al dashboard para admin
            return redirect()->intended(route('dashboard', absolute: false));
        } elseif ($user->hasRole('student')) {
            // Redirigir al dashboard para estudiantes
            return redirect()->intended(route('dashboard.student', absolute: false));
        }
        // Si no tiene un rol válido, puedes redirigir a una ruta por defecto
        return redirect('/');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
