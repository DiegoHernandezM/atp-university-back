<?php

namespace App\Services;

use App\Models\Course;
use Illuminate\Support\Facades\Storage;


class CourseService
{
    protected $mCourse;

    public function __construct()
    {
        $this->mCourse = new Course();
    }

    public function getCourses()
    {
        return $this->mCourse->with('subjects')->get();
    }

    public function createCourse($data)
    {
        if (isset($data['file'])) {
            $filePath = $data['file']->store('courses', 's3');
            $fileUrl = Storage::disk('s3')->url($filePath);
        } else {
            $fileUrl = null;
        }

        if (isset($data['cover'])) {
            $coverPath = $data['cover']->store('courses', 'public');
            $coverUrl = Storage::url($coverPath);
        } else {
            $coverUrl = null;
        }

        return $this->mCourse->create([
            'title' => $data['title'],
            'description' => $data['description'],
            'price' => $data['price'],
            'introduction_media' => $fileUrl,
            'cover' => $coverUrl,
            'status' => $data['status']
        ]);
    }

    public function updateCourse($id, $data)
    {
        $course = $this->mCourse->find($id);

        // Verificar si se ha enviado un nuevo archivo
        if (isset($data['file'])) {
            // Si el curso ya tiene un archivo, eliminarlo de S3
            if ($course->introduction_media) {
                $s3Key = str_replace(Storage::disk('s3')->url(''), '', $course->introduction_media);
                Storage::disk('s3')->delete($s3Key);
            }
            $filePath = $data['file']->store('courses', 's3');
            $fileUrl = Storage::disk('s3')->url($filePath);
            $data['file'] = $fileUrl;
        }
        if (isset($data['cover'])) {
            if ($course->cover) {
                $coverPath = str_replace('/storage/', '', $course->cover);
                Storage::disk('public')->delete($coverPath);
            }
            $newCoverPath = $data['cover']->store('courses', 'public');
            $coverUrl = Storage::url($newCoverPath);
            $data['cover'] = $coverUrl;
        }

        return $course->update($data);
    }

    public function delete($id)
    {
        $course = $this->mCourse->find($id);
        if (!$course) {
            throw new \Exception('Curso no encontrado');
        }
        if ($course->subjects()->exists()) {
            $course->subjects()->detach();
        }
        return $course->delete();
    }

    public function saveCoursesSubject($data)
    {
        $course = Course::findOrFail($data['course_id']);
        $course->subjects()->sync($data['aSubjects']);
        return true;
    }
}
