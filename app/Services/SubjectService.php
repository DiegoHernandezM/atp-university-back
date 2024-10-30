<?php

namespace App\Services;

use App\Models\StudentResource;
use App\Models\Subject;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\UploadedFile;


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
            'quizz' => isset($data['quizz']) ? json_encode($data['quizz']) : null,
            'cover' => $coverUrl
        ]);
    }

    public function updateSubject($id, $data)
    {
        $subject = $this->mSubject->findOrFail($id);
        if (isset($data['cover']) && $data['cover'] instanceof \Illuminate\Http\UploadedFile) {
            if ($subject->cover) {
                $coverPath = str_replace('/storage/', '', $subject->cover);
                Storage::disk('public')->delete($coverPath);
            }
            $newCoverPath = $data['cover']->store('subjects', 'public');
            $coverUrl = Storage::url($newCoverPath);
            $data['cover'] = $coverUrl;
        } else {
            unset($data['cover']);
        }
        if (isset($data['quizz']) && $data['quizz'] instanceof \Illuminate\Http\UploadedFile) {
            $quizz = [];
            $rows = Excel::toArray([], $data['quizz']);
            $sheet = $rows[0];

            for ($i = 1; $i < count($sheet); $i++) {
                $row = $sheet[$i];
                if (isset($row[0]) && isset($row[5])) {
                    $quizz[] = [
                        'question' => $row[0],
                        'answers' => [
                            'A' => $row[1] ?? '',
                            'B' => $row[2] ?? '',
                            'C' => $row[3] ?? '',
                            'D' => $row[4] ?? '',
                        ],
                        'answare' => $row[5] ?? '',
                    ];
                }
            }
            $data['quizz'] = json_encode($quizz);
        } else {
            unset($data['quizz']);
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
            ->map(fn($resource) => ['student_id' => $student->id, 'resource_id' => $resource->id, 'updated_at' => new \DateTime])
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

    public function processQuizzFile(UploadedFile $file)
    {
        $quizz = [];
        $rows = Excel::toArray([], $file);
        $sheet = $rows[0];
        for ($i = 1; $i < count($sheet); $i++) {
            $row = $sheet[$i];
            if (isset($row[0]) && isset($row[5])) {
                $quizz[] = [
                    'question' => $row[0],    // Pregunta
                    'answers' => [
                        'A' => $row[1] ?? '', // Respuesta A
                        'B' => $row[2] ?? '', // Respuesta B
                        'C' => $row[3] ?? '', // Respuesta C
                        'D' => $row[4] ?? '', // Respuesta D
                    ],
                    'answare' => $row[5] ?? '', // Respuesta correcta
                ];
            }
        }

        return $quizz;
    }
}
