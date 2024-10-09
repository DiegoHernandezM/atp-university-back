<?php

namespace App\Services;

use App\Models\Subject;

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
        return Subject::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status']
        ]);
    }

    public function updateSubject($id, $data)
    {
        $subject = $this->mSubject->find($id);
        return $subject->update($data);
    }

    public function delete($id)
    {
        $subject = $this->mSubject->find($id);
        return $subject->delete();
    }
}
