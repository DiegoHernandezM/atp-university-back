<?php

namespace App\Services;

use App\Models\StudentResource;
use App\Models\Subject;
use Illuminate\Support\Facades\Storage;

class SubjectService
{
    protected $mSubject;

    public function __construct()
    {
        $this->mSubject = new Subject();
    }

    public function getSubjects()
    {
        return $this->mSubject->all();
    }

    public function createSubject($data)
    {
        if (isset($data['cover'])) {
            $coverPath = $data['cover']->store('subjects', 'public');
            $coverUrl = Storage::url($coverPath);
        } else {
            $coverUrl = null;
        }

        return Subject::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status'],
            'cover' => $coverUrl
        ]);
    }

    public function updateSubject($id, $data)
    {
        $subject = $this->mSubject->find($id);
        if (isset($data['cover'])) {
            if ($subject->cover) {
                $coverPath = str_replace('/storage/', '', $subject->cover);
                Storage::disk('public')->delete($coverPath);
            }
            $newCoverPath = $data['cover']->store('subjects', 'public');
            $coverUrl = Storage::url($newCoverPath);
            $data['cover'] = $coverUrl;
        }
        return $subject->update($data);
    }

    public function delete($id)
    {
        $subject = $this->mSubject->find($id);
        return $subject->delete();
    }

    public function studentResource($subject)
    {
        $student = auth()->user()->student;
        if (empty($student) || count($student->studentResources) > 0) {
            return;
        }

        $resources = $subject->lessons
            ->flatMap(fn($lesson) => $lesson->resources)
            ->map(fn($resource) => ['student_id' => $student->id, 'resource_id' => $resource->id])
            ->toArray();

        StudentResource::insert($resources);
    }

    public function getLessons($subject)
    {
        $student = auth()->user()->student;
        if (!empty($student)) {
            $lessons = $subject->lessons()
                ->with(['resources.studentResources' => function ($query) use ($student) {
                    $query->where('student_id', $student->id);
                }])
                ->get();
        } else {
            $lessons = $subject->lessons()
                ->with('resources')
                ->get();
        }
        return $lessons;
    }
}
