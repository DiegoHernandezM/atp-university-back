<?php

namespace App\Services;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\PayPalUser;
use App\Models\Resource;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Support\Facades\DB;


class DashboardService
{
    protected $mCourses;
    protected $mStudent;
    protected $mPaypal;

    public function __construct()
    {
        $this->mCourses = new Course();
        $this->mStudent = new Student();
        $this->mPaypal = new PayPalUser();
    }

    public function getLanding() {}

    public function getStudent()
    {
        $student = auth()->user()->student;
        if ($student) {
            $resources = $student->resources->count();
            $courses = $student->courses->count();
            $courseIds = $student->courses->pluck('id')->toArray();
            $untakenCourses = Course::whereNotIn('id', $courseIds)->get();
            $subjectIds = Subject::whereHas('courses', function ($q) use ($courseIds) {
                $q->whereIn('course_id', $courseIds);
            })->pluck('id')->toArray();
            $lessonIds = Lesson::whereIn('subject_id', $subjectIds)->pluck('id')->toArray();
            $allResources = Resource::whereIn('lesson_id', $lessonIds)->count();
            $progress = $allResources > 0 ? $resources * 100 / $allResources : 0;
            return [
                'resources' => $resources,
                'courses' => $courses,
                'untakenCourses' => $untakenCourses,
                'progress' => $progress
            ];
        }
    }

    public function getUniveristy()
    {
        $courses = $this->mCourses->with('students')->where('status', 'active')->get();
        $bCategories = $courses->pluck('title')->toArray();
        $bSeries = [];
        foreach ($courses as $index => $course) {
            $bSeries[$index] = $course->students->count();
        }
        $students = $this->mStudent->all();
        $amount = $this->mPaypal->sum('amount');
        $formattedAmount = '$' . number_format($amount, 2, '.', ',');



        return [
            'countStudents' => $students->count(),
            'countCourses' => $courses->count(),
            'amount' => $formattedAmount,
            'barChart' => [
                'categories' => $bCategories,
                'series' => $bSeries
            ]
        ];
    }

    public function  getBalance($year)
    {
        $lSales = DB::table('paypal_user')
            ->select(DB::raw('MONTH(create_time) as month'), DB::raw('SUM(amount) as total'))
            ->whereYear('create_time', $year)
            ->groupBy(DB::raw('MONTH(create_time)'))
            ->orderBy('month')
            ->get();

        $monthlySales = array_fill(1, 12, 0);

        foreach ($lSales as $sale) {
            $monthlySales[$sale->month] = (float) $sale->total;
        }

        return [
            'categories' => ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            'series' => array_values($monthlySales),
        ];
    }
}
