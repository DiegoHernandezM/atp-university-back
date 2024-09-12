<?php

use App\Http\Controllers\AdministratorsController;

Route::get('/administrators', [AdministratorsController::class, 'get'])->name('administrators.get');
Route::post('/administrators/store', [AdministratorsController::class, 'store'])->name('administrators.store');
