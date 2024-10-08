<?php

use App\Http\Controllers\ResourceController;

Route::post('/resources/store/{lesson_id}', [ResourceController::class, 'store'])->name('resources.store');
