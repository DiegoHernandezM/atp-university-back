<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CheckActiveSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        // Solo aplicar la lógica a usuarios con el rol "student"
        if ($user && $user->hasRole('student')) {
            if ($user->session_id && $user->session_id !== Session::getId()) {
                // Cerrar sesión si hay conflicto de sesión
                Auth::logout();

                return redirect('/login')->withErrors(['general' => 'Tu sesión está activa en otro dispositivo.']);
            }
        }
        return $next($request);
    }
}
