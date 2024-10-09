<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LessonRequest extends FormRequest
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
        return [
            'subject' => 'required|exists:subjects,id', // Debe ser un ID válido en la tabla subjects
            'title' => 'required|string|max:255',       // Título requerido y no mayor a 255 caracteres
            'description' => 'nullable|string|max:500'
        ];
    }
}
