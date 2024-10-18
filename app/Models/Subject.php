<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'description', 'status', 'cover'];

    /**
     * Relación uno a muchos con Lesson.
     * Una materia puede tener muchas lecciones.
     */
    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    public function courses()
    {
        // Especifica el nombre de la tabla pivote 'course_subjects'
        return $this->belongsToMany(Course::class, 'course_subjects');
    }
}
