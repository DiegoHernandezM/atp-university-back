<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = ['subject_id', 'title', 'description', 'order'];

    /**
     * Relación muchos a uno con Subject.
     * Una lección pertenece a una materia.
     */
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    /**
     * Relación uno a muchos con Resource.
     * Una lección puede tener muchos recursos (videos, documentos, etc.).
     */
    public function resources()
    {
        return $this->hasMany(Resource::class);
    }
}
