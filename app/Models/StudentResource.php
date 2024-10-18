<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentResource extends Model
{
    use HasFactory;
    protected $table = 'student_resources';

    protected $fillable = ['student_id', 'resource_id', 'videoProgress', 'pageProgress', 'completed'];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function resource()
    {
        return $this->belongsTo(Resource::class);
    }
}
