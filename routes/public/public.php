<?php

use App\Http\Controllers\ContactFormController;

Route::post('/conctact', [ContactFormController::class, 'store'])->name('contact.store');
