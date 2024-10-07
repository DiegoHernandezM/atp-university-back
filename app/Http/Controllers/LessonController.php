<?php

namespace App\Http\Controllers;

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
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }
}
