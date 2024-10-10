<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use App\Services\CourseService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function get(CourseService $service)
    {
        try {
            $courses = $service->getCourses();
            return Inertia::render('Courses/Index', [
                'courses' => $courses
            ]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }

    }

    public function store(CourseRequest $request, CourseService $service)
    {
        try {
            $validated = $request->validated();
            $service->createCourse($validated);
            return redirect()->route('courses.index');
        } catch(\Exception $e) {
            return redirect()->route('courses.index')->withErrors(['error' => 'Hubo un problema al crear el curso. Inténtalo de nuevo.']);
        }
    }

    public function update(CourseRequest $request, $id, CourseService $service)
    {
        try {
            $validated = $request->validated();
            $service->updateCourse($id, $validated);
            return "ok";
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function destroy($id, CourseService $service)
    {
        try {
            $service->delete($id);
            return redirect()->route('courses.index');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
