<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'f_surname' => 'required|string|max:255',
            'm_surname' => 'required|string|max:255',
            'gender' => 'required|in:Masculino,Femenino,Otro',
            'phone' => 'required|string|max:10',
            'address' => 'required|string|max:255',
            'zip_code' => 'required|string|max:10',
            'city' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'courses' => 'nullable|array'
        ];
        if ($this->isMethod('put')) {
            $rules['email'] = 'nullable|string|email|max:255';
        } else {
            $rules['email'] = 'required|string|email|max:255|unique:users,email';
        }
        return $rules;
    }
}
