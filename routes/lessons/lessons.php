<?php

use App\Http\Controllers\LessonController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':admin')->group(function () {
    Route::post('/lessons/store', [LessonController::class, 'store'])->name('lessons.store');
    Route::put('/lessons/update/{lesson}', [LessonController::class, 'update'])->name('lessons.update');
    Route::delete('/lessons/{lesson}', [LessonController::class, 'destroy'])->name('lessons.destroy');
    Route::get('/lessons/{subject_id}', [LessonController::class, 'get'])->name('lessons.index');
});



