<?php

use App\Http\Controllers\LandingPageController;

Route::get('/landing', [LandingPageController::class, 'edit'])->name('landing.edit');
Route::post('/landing', [LandingPageController::class, 'store'])->name('landing.store');
