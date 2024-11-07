<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':admin')->group(function () {
    Route::get('/contact', [ContactFormController::class, 'get'])->name('contacts.get');
    Route::delete('/contact/{person}', [ContactFormController::class, 'delete'])->name('contacts.destroy');
});
