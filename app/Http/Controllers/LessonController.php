<?php

namespace App\Http\Controllers;

use App\Http\Requests\LessonRequest;
use App\Models\Lesson;
use App\Models\Subject;
use App\Providers\LessonService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonController extends Controller
{
    public function get($id, LessonService $service)
    {
        try {
            $lessons = $service->getLessons($id);
            $subject = Subject::find($id);
            return Inertia::render('Lessons/Index', [
                'lessons' => $lessons,
                'subject' => $subject
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function store(LessonRequest $request, LessonService $service)
    {
        try {
            $validated = $request->validated();
            $service->createLesson($validated);
            return redirect()->back();
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Hubo un problema al crear la leccion. Inténtalo de nuevo.']);
        }
    }

    public function update(LessonRequest $request, Lesson $lesson, LessonService $service)
    {
        try {
            $validated = $request->validated();
            $service->updateLesson($lesson, $validated);
            return redirect()->back();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function destroy(Lesson $lesson, LessonService $service)
    {
        try {
            $service->delete($lesson);
            return redirect()->back();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
