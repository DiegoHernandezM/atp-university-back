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
            'resources' => 'required|array', // resources debe ser un array
            'resources.*.id' => 'nullable', // id es opcional pero debe existir si se proporciona
            'resources.*.title' => 'required|string|max:255', // Título del recurso es requerido
            'resources.*.type' => 'required|in:PDF,Video', // Tipo de recurso debe ser PDF o Video
            'resources.*.file' => 'nullable|file|mimes:pdf,mp4|max:20480', // Archivo opcional, pero si está presente debe ser PDF o MP4
        ];
    }
}
