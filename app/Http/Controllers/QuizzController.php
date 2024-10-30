<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuizzRequest;
use App\Services\QuizzService;
use Illuminate\Http\Request;

class QuizzController extends Controller
{
    public function saveQuizResponse(QuizzRequest $request, QuizzService $service)
    {
        try {
            $data = $request->validated();
            $result = $service->saveQuizResponse($data, auth()->id());
            return response()->json($result);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }

    public function getQuizAttempt(Request $request, QuizzService $service)
    {
        $subjectId = $request->input('subjectId');
        $attempt = $service->getQuizAttempt($subjectId, auth()->id());

        return response()->json($attempt);
    }

    public function resetQuizAttempt(Request $request, QuizzService $service)
    {
        $subjectId = $request->input('subjectId');
        $service->resetQuizAttempt($subjectId, auth()->id());

        return response()->json(['success' => true]);
    }
}
