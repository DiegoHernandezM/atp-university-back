<?php

use App\Http\Controllers\QuizzController;
use App\Http\Middleware\RoleMiddleware;

Route::middleware(RoleMiddleware::class.':student')->group(function () {
    Route::post('/quizz/get-quiz-attempt', [QuizzController::class, 'getQuizAttempt'])->name('quizz.getResponses');
    Route::post('/quizz/save-quiz-response', [QuizzController::class, 'saveQuizResponse'])->name('quizz.saveResponses');
    Route::post('/quizz/reset-quiz-attempt', [QuizzController::class, 'resetQuizAttempt'])->name('quizz.resetResponses');

});




