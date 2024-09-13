<?php

use App\Http\Controllers\AdministratorsController;

Route::get('/administrators', [AdministratorsController::class, 'get'])->name('administrators.get');
Route::post('/administrators/store', [AdministratorsController::class, 'store'])->name('administrators.store');
Route::put('/administrators/update/{user}', [AdministratorsController::class, 'update'])->name('administrators.update');
Route::delete('administrators/{user}', [AdministratorsController::class, 'destroy'])->name('administrators.destroy');
