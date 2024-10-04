<?php

use App\Http\Controllers\SubjectController;

Route::get('/subjects', [SubjectController::class, 'get'])->name('subjects.index');
Route::post('/subjects/store', [SubjectController::class, 'store'])->name('subjects.store');
Route::put('/subjects/update/{user}', [SubjectController::class, 'update'])->name('subjects.update');
Route::delete('subjects/{user}', [SubjectController::class, 'destroy'])->name('subjects.destroy');

