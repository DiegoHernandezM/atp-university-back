<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$role)
    {
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Debes iniciar sesión.');
        }

        $user = Auth::user();

        if (!$user->roles || !in_array(Auth::user()->roles->first()->name, $role)) {
            return redirect('/unauthorized')->with('error', 'No tienes permiso para acceder a esta página.');
        }

        return $next($request);
    }
}
