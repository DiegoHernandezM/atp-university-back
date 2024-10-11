<?php

namespace App\Services;

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
}
