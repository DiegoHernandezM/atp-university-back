<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Models\Student;
use App\Services\StudentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(StudentService $service)
    {
        try {
            $students = $service->getStudents();
            return Inertia::render('Students/Index', [
                'students' => $students
            ]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request, StudentService $service)
    {
        try {
            $validated = $request->validated();
            $service->createStudent($validated);
            return redirect()->route('students.index');
        } catch(\Exception $e) {
            return redirect()->route('students.index')->withErrors(['error' => 'Hubo un problema al crear el estudiante. Inténtalo de nuevo.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentRequest $request, Student $student, StudentService $service)
    {
        try {
            $validated = $request->validated();
            $service->updateStudent($student, $validated);
            return redirect()->route('students.index');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student, StudentService $service)
    {
        try {
            $service->delete($student);
            return redirect()->route('students.index');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
