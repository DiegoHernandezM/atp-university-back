<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('landing');
});

Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');
