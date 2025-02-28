<?php

namespace App\Providers;

use App\Models\Lesson;
use App\Models\Resource;
use App\Models\StudentResource;

class LessonService
{

    protected $mLesson;
    protected $mResource;
    protected $mStudentResource;

    public function __construct()
    {
        $this->mLesson = new Lesson();
        $this->mResource = new Resource();
        $this->mStudentResource = new StudentResource();
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

        if ($resources->isNotEmpty()) {
            foreach ($resources as $resource) {
                // Obtener correctamente los registros de student_resources asociados al recurso
                $sResources = $this->mStudentResource->where('resource_id', $resource->id)->get();

                if ($sResources->isNotEmpty()) {
                    foreach ($sResources as $sResource) {
                        $sResource->delete();
                    }
                }

                $resource->delete();
            }
        }

        return $lesson->delete();
    }
}
