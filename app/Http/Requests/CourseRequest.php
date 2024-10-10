<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CourseRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',  // Validamos que el precio sea un número y mayor o igual a 0
        ];

        // Solo se requiere validar el archivo si está presente en la solicitud
        if ($this->isMethod('post') || $this->hasFile('file')) {
            $rules['file'] = 'nullable|file|mimes:pdf,mp4|max:20480';  // Solo PDF y MP4 con un tamaño máximo de 20MB
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'title.required' => 'El título es obligatorio.',
            'title.string' => 'El título debe ser una cadena de texto.',
            'title.max' => 'El título no debe exceder los 255 caracteres.',
            'price.required' => 'El precio es obligatorio.',
            'price.numeric' => 'El precio debe ser un número.',
            'price.min' => 'El precio debe ser mayor o igual a 0.',
            'file.file' => 'El archivo de introducción debe ser un archivo válido.',
            'file.mimes' => 'El archivo de introducción debe ser un archivo PDF o MP4.',
            'file.max' => 'El archivo de introducción no debe exceder los 20MB.',
        ];
    }
}
