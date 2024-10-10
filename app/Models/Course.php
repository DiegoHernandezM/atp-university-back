<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'introduction_media'
    ];

    /**
     * Relación de muchos a muchos con Subject (Materia).
     */
    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'course_subject')
                    ->withPivot('order')
                    ->withTimestamps();
    }
}
