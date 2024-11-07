<?php

use App\Http\Controllers\LandingPageController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':admin')->group(function () {
    Route::get('/landing', [LandingPageController::class, 'edit'])->name('landing.edit');
    Route::post('/landing', [LandingPageController::class, 'store'])->name('landing.store');
});
