<?php

use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Models\LandingPageContent;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'landingData' => LandingPageContent::first()
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Routes
    require base_path('routes/profile/profile.php');
    require base_path('routes/landing/landing.php');
    require base_path('routes/administrators/administrators.php');
    require base_path('routes/student/student.php');
});

// public
require base_path('routes/public/public.php');


require __DIR__ . '/auth.php';
