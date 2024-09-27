<?php

use App\Http\Controllers\LandingPageController;

Route::get('/landing', [LandingPageController::class, 'edit'])->name('landing.edit');
Route::post('/landing', [LandingPageController::class, 'store'])->name('landing.store');
Route::post('/landing/welcome', [LandingPageController::class, 'welcomeSection'])->name('landing.welcomeSection');
Route::post('/landing/metricts', [LandingPageController::class, 'MetrictsSection'])->name('landing.metrictsSection');
Route::post('/landing/about', [LandingPageController::class, 'AboutSection'])->name('landing.aboutSection');
