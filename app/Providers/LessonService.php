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

    public function createLesson($data)
    {
        return $this->mLesson->create([
            'subject_id' => $data['subject'],
            'title' => $data['title'],
            'description' => $data['description']
        ]);
    }

    public function updateLesson(Lesson $lesson, $data)
    {
        return $lesson->update($data);
    }

    public function delete(Lesson $lesson)
    {
        return $lesson->delete();
    }
}
