<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class StudentCourse extends Pivot
{
    use HasFactory;

    protected $table = 'student_courses';

    protected $fillable = [
        'course_id',
        'student_id'
    ];
}
