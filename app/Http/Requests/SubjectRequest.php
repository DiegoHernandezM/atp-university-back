<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => 'required|string|max:255',  // Requerido siempre por defecto
            'description' => 'nullable|string|max:500',
            'status' => 'required|in:active,inactive',
            'cover' => 'nullable|file|mimes:jpeg,jpg|max:20480',  // Solo archivos jpeg y jpg, 20MB máximo
        ];

        // Verificamos si la solicitud es para actualizar o crear un nuevo registro
        if ($this->input('id')) {
            // Si se envía un id, es una actualización, no requerimos que el título sea único
            $rules['title'] = 'required|string|max:255';
        } else {
            // Si no hay id, es creación de un nuevo registro, requerimos que el título sea único
            $rules['title'] = 'required|string|max:255|unique:subjects,title';
        }

        return $rules;
    }
}
