<?php

use App\Http\Controllers\ContactFormController;

Route::get('/contact', [ContactFormController::class, 'get'])->name('contacts.get');
Route::delete('/contact/{person}', [ContactFormController::class, 'delete'])->name('contacts.destroy');
