<?php

use App\Http\Controllers\SubjectController;
use App\Http\Middleware\RoleMiddleware;


Route::middleware(RoleMiddleware::class.':admin')->group(function () {
    Route::get('/subjects', [SubjectController::class, 'get'])->name('subjects.index');
    Route::post('/subjects/store', [SubjectController::class, 'store'])->name('subjects.store');
    Route::post('/subjects/update/{id}', [SubjectController::class, 'update'])->name('subjects.update');
    Route::delete('subjects/{id}', [SubjectController::class, 'destroy'])->name('subjects.destroy');
});

Route::middleware(RoleMiddleware::class.':student')->group(function () {
    Route::get('subjects/{subject}', [SubjectController::class, 'view'])->name('subjects.view');
});
