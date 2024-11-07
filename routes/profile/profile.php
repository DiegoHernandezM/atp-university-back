<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':admin,student')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
