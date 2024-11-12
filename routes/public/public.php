<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\VisitController;

Route::post('/conctact', [ContactFormController::class, 'store'])->name('contact.store');
Route::post('/register-visit', [VisitController::class, 'registerVisit']);
