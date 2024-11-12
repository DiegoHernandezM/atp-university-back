<?php

use App\Http\Controllers\VisitController;

Route::get('/get-visits', [VisitController::class, 'getVisits']);
