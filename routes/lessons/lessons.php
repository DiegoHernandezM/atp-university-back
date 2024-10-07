<?php

use App\Http\Controllers\LessonController;

Route::get('/lessons/{subject_id}', [LessonController::class, 'get'])->name('lessons.index');
Route::post('/lessons/store', [LessonController::class, 'store'])->name('lessons.store');
Route::put('/lessons/update/{lesson}', [LessonController::class, 'update'])->name('lessons.update');
Route::delete('/lessons/{lesson}', [LessonController::class, 'destroy'])->name('lessons.destroy');

