<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResourceRequest extends FormRequest
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
            'lesson_id' => 'required|exists:lessons,id', // Asegura que el lesson_id es válido
            'resources' => 'nullable|array', // Permite que resources sea un array o nulo
            'resources.*.id' => 'nullable|exists:resources,id', // Si se proporciona, el ID debe existir
            'resources.*.title' => 'required_with:resources|string|max:255', // Solo es requerido si hay resources
            'resources.*.type' => 'required_with:resources|in:pdf,video', // Solo es requerido si hay resources
            'resources.*.file' => 'nullable|file|mimes:pdf,mp4|max:20480', // Archivo opcional
        ];
    }
}
