<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;


class Resource extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = ['lesson_id', 'type', 'url', 's3_key', 'title', 'size', 'mime_type'];

    /**
     * Relación muchos a uno con Lesson.
     * Un recurso pertenece a una lección.
     */
    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    /**
     * Elimina el archivo en S3 cuando se elimina el recurso.
     */
    public static function boot()
    {
        parent::boot();

        static::deleting(function ($resource) {
            // Elimina el archivo de S3
            Storage::disk('s3')->delete($resource->s3_key);
        });
    }

    public function getStudentResource($studentId)
    {
        return $this->studentResources()->where('student_id', $studentId)->first();
    }

    public function studentResources()
    {
        return $this->hasMany(StudentResource::class, 'resource_id');
    }
}
