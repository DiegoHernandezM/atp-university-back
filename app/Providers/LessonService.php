<?php

namespace App\Providers;

use App\Models\Lesson;

class LessonService
{

    protected $mLesson;

    public function __construct()
    {
        $this->mLesson = new Lesson();
    }

    public function getLessons($subject)
    {
        return $this->mLesson->where('subject_id', $subject)->get();
    }

}
