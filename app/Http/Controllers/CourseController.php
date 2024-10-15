<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use App\Models\Course;
use App\Services\CourseService;
use App\Services\SubjectService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function get(CourseService $service, SubjectService $sSubject)
    {
        try {
            $courses = $service->getCourses();
            $subjects = $sSubject->getSubjects();
            return Inertia::render('Courses/Index', [
                'courses' => $courses,
                'subjects' => $subjects
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function store(CourseRequest $request, CourseService $service)
    {
        try {
            $validated = $request->validated();
            $service->createCourse($validated);
            return redirect()->route('courses.index');
        } catch (\Exception $e) {
            return redirect()->route('courses.index')->withErrors(['error' => 'Hubo un problema al crear el curso. Inténtalo de nuevo.']);
        }
    }

    public function update(CourseRequest $request, $id, CourseService $service)
    {
        try {
            $validated = $request->validated();
            $service->updateCourse($id, $validated);
            return redirect()->route('courses.index');
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

    public function saveSubjects(Request $request, CourseService $service)
    {
        try {
            $service->saveCoursesSubject($request->all());
            return redirect()->route('courses.index');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function list(CourseService $service)
    {
        try {
            $courses = $service->getCourses();
            return Inertia::render('Courses/List', [
                'courses' => $courses
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function show(Course $course)
    {
        try {
            return Inertia::render('Courses/Show', [
                'course' => $course,
                'subjects' => $course->subjects()->withCount('lessons')->get()
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
