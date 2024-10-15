<?php

namespace App\Providers;

use App\Models\Lesson;
use App\Models\Resource;

class LessonService
{

    protected $mLesson;
    protected $mResource;

    public function __construct()
    {
        $this->mLesson = new Lesson();
        $this->mResource = new Resource();
    }

    public function getLessons($subject)
    {
        return $this->mLesson->where('subject_id', $subject)->with('resources')->get();
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
        $resources = $this->mResource->where('lesson_id', $lesson->id)->get();
        if(count($resources) > 0) {
            foreach($resources as $resource) {
                $resource->delete();
            }
        }
        return $lesson->delete();
    }
}
