<?php

use App\Http\Controllers\DashboardController;

Route::get('/dashboard', [DashboardController::class, 'getDataLanding'])->name('dashboard');
Route::get('/dashboard-student', [DashboardController::class, 'getDataStudent'])->name('dashboard.student');
Route::get('/dashboard-university', [DashboardController::class, 'getDataUniversity'])->name('dashboard.university');

// Grafica lineal
Route::get('/dashboard-balance-university/{year}', [DashboardController::class, 'getDataBalance'])->name('dashboard.balance');
