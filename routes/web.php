<?php

use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Models\LandingPageContent;
use App\Services\CourseService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $service = new CourseService;
    $courses = $service->getCourses('landing');
    return Inertia::render('LandingPage', [
        'landingData' => LandingPageContent::first(),
        'courses' => $courses
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard-student', function () {
    return Inertia::render('DashboardStudent');
})->middleware(['auth', 'verified'])->name('dashboard.student');

Route::middleware('auth')->group(function () {
    // Routes
    require base_path('routes/profile/profile.php');
    require base_path('routes/landing/landing.php');
    require base_path('routes/administrators/administrators.php');
    require base_path('routes/student/student.php');
    require base_path('routes/contacts/contacts.php');
    require base_path('routes/subjects/subjects.php');
    require base_path('routes/lessons/lessons.php');
    require base_path('routes/resources/resources.php');
    require base_path('routes/courses/courses.php');
});

// public
require base_path('routes/public/public.php');


require __DIR__ . '/auth.php';
