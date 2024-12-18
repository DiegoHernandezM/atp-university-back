<?php

use App\Http\Controllers\StudentController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class . ':admin')->group(function () {
    Route::get('/students', [StudentController::class, 'index'])->name('students.index');
    Route::post('/students/store', [StudentController::class, 'store'])->name('students.store');
    Route::put('/students/update/{student}', [StudentController::class, 'update'])->name('students.update');
    Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destroy');
    Route::post('/students/{student}/close-session', [StudentController::class, 'closeSessionStudent'])
        ->name('students.session');
});
