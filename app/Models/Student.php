<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'f_surname',
        'm_surname',
        'gender',
        'phone',
        'address',
        'zip_code',
        'city',
        'country',
        'user_id',
    ];

    /**
     * Get the user that owns the student.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'student_courses');
    }

    public function resources()
    {
        return $this->belongsToMany(Resource::class, 'student_resources');
    }

    public function studentResources()
    {
        return $this->hasMany(StudentResource::class);
    }
}
