<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubjectRequest;
use App\Models\Subject;
use App\Services\SubjectService;
use Inertia\Inertia;

class SubjectController extends Controller
{
    public function get(SubjectService $service)
    {
        try {
            $subjects = $service->getSubjects();
            return Inertia::render('Subjects/Index', [
                'subjects' => $subjects
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function store(SubjectRequest $request, SubjectService $service)
    {
        try {
            $validated = $request->validated();
            $service->createSubject($validated);
            return redirect()->route('subjects.index');
        } catch (\Exception $e) {
            return redirect()->route('subjects.index')->withErrors(['error' => 'Hubo un problema al crear la materia. Inténtalo de nuevo.']);
        }
    }

    public function update(SubjectRequest $request, $id, SubjectService $service)
    {
        try {
            $validated = $request->validated();
            $service->updateSubject($id, $validated);
            return redirect()->route('subjects.index');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function destroy($id, SubjectService $service)
    {
        try {
            $service->delete($id);
            return redirect()->route('subjects.index');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function view(Subject $subject)
    {
        try {
            return Inertia::render('Courses/View', [
                'subject' => $subject,
                'lessons' => $subject->lessons()->with('resources')->get()
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
