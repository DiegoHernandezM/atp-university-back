<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubjectRequest;
use App\Models\Subject;
use App\Services\SubjectService;
use Inertia\Inertia;
use Illuminate\Http\UploadedFile;


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
            if ($request->hasFile('quizz') && $request->file('quizz') instanceof UploadedFile) {
                $file = $request->file('quizz');
                $validated['quizz'] = $service->processQuizzFile($file); // Procesar el archivo y obtener el JSON
            }
            $service->createSubject($validated);
            return redirect()->route('subjects.index');
        } catch (\Exception $e) {
            return redirect()->route('subjects.index')->withErrors(['error' => 'Hubo un problema al crear la materia. Inténtalo de nuevo. '. $e->getMessage()]);
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

    public function view(Subject $subject, SubjectService $service)
    {
        try {
            $service->studentResource($subject);
            $lessons = $service->getLessons($subject);
            return Inertia::render('Courses/View', [
                'subject' => $subject,
                'lessons' => $lessons
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
