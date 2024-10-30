<?php

namespace App\Services;

use App\Models\QuizAttempt;
use App\Models\Subject;

class QuizzService
{
    protected $mSubject;
    protected $mQuizzAttempt;

    public function __construct()
    {
        $this->mSubject = new Subject();
        $this->mQuizzAttempt = new QuizAttempt();
    }

    public function saveQuizResponse($data, $userId)
    {
        // Buscar el último intento del estudiante o crear uno nuevo si no existe
        $subject = $this->mSubject->findOrFail($data['subjectId']);
        $attempt = $this->mQuizzAttempt->firstOrCreate(
            [
                'subject_id' => $data['subjectId'],
                'user_id' => $userId,
                'total_questions' => $subject->quizz ? count(json_decode($subject->quizz, true)) : 0,
            ],
            [
                'responses' => json_encode([]),
            ]
        );

        // Actualizar las respuestas en el intento
        $responses = json_decode($attempt->responses, true);
        if (!isset($responses[$data['questionIndex']])) {
            $responses[$data['questionIndex']] = $data['answer'];

            // Verificar si la respuesta es correcta
            $correctAnswer = json_decode($subject->quizz, true)[$data['questionIndex']]['answare'];
            if ($data['answer'] === $correctAnswer) {
                $attempt->correct_count += 1;
            }

            // Guardar las respuestas actualizadas
            $attempt->responses = json_encode($responses);
            $attempt->save();
        }

        return [
            'success' => true,
            'correct_count' => $attempt->correct_count,
            'total_questions' => $attempt->total_questions,
        ];
    }

    public function getQuizAttempt($subjectId, $userId)
    {
        // Buscar si existe un intento del cuestionario para el usuario y la materia
        $attempt = QuizAttempt::where('subject_id', $subjectId)
            ->where('user_id', $userId)
            ->latest()
            ->first();

        if ($attempt) {
            return [
                'responses' => json_decode($attempt->responses, true),
                'correct_count' => $attempt->correct_count,
                'total_questions' => $attempt->total_questions,
            ];
        }

        return null; // No hay intento previo
    }

    public function resetQuizAttempt($subjectId, $userId)
    {
        // Eliminar el último intento del estudiante para la materia
        return QuizAttempt::where('subject_id', $subjectId)
            ->where('user_id', $userId)
            ->delete();
    }
}
