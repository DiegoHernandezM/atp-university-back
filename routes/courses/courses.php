<?php

use App\Http\Controllers\CourseController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':admin')->group(function () {
    Route::get('/courses', [CourseController::class, 'get'])->name('courses.index');
    Route::post('/courses/store', [CourseController::class, 'store'])->name('courses.store');
    Route::post('/courses/update/{id}', [CourseController::class, 'update'])->name('courses.update');
    Route::delete('courses/{id}', [CourseController::class, 'destroy'])->name('courses.destroy');
    Route::post('/courses/subjects', [CourseController::class, 'saveSubjects'])->name('courses.subjects');
});

Route::middleware(RoleMiddleware::class.':student,admin')->group(function () {
    Route::get('/courses/list', [CourseController::class, 'list'])->name('courses.list');
    Route::get('courses/{course}', [CourseController::class, 'show'])->name('courses.show');
});
