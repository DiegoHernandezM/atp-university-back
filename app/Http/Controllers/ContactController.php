<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Validar los datos del formulario
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Lógica para manejar el envío de datos (por ejemplo, enviar un correo electrónico)

        return redirect()->back()->with('success', '¡Gracias por tu mensaje!');
    }
}
