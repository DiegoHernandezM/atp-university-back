<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CourseSubject extends Pivot
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'subject_id',
        'order',
    ];
}
