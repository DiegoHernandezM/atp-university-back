<?php

use App\Http\Controllers\DashboardController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'getDataLanding'])->name('dashboard');
    Route::get('/dashboard-university', [DashboardController::class, 'getDataUniversity'])->name('dashboard.university');
    // Grafica lineal
    Route::get('/dashboard-balance-university/{year}', [DashboardController::class, 'getDataBalance'])->name('dashboard.balance');
    Route::get('/dashboard-visits/{year}', [DashboardController::class, 'getDataVisits'])->name('dashboard.visits');
});

Route::middleware(RoleMiddleware::class.':student')->group(function () {
    Route::get('/dashboard-student', [DashboardController::class, 'getDataStudent'])->name('dashboard.student');
});

