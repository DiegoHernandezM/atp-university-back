<?php

use App\Http\Controllers\ResourceController;

Route::post('/resources/store', [ResourceController::class, 'store'])->name('resources.store');
Route::post('/resources/saveprogress', [ResourceController::class, 'saveprogress'])->name('resources.saveprogress');
// Route::post('/resources/store/{lesson_id}', [ResourceController::class, 'store'])->name('resources.store');
