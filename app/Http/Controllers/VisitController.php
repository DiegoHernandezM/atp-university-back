<?php

namespace App\Http\Controllers;

use App\Http\Requests\VisitRequest;
use App\Services\VisitServices;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    public function registerVisit(VisitRequest $request, VisitServices $service)
    {
        try {
            $url = $request->input('url');
            $visitsCount = $service->registerVisit($url);
            return response()->json(['success' => true, 'visits' => $visitsCount]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }

    public function getVisits(VisitRequest $request, VisitServices $service)
    {
        try {
            $url = $request->input('url');
            $visitsCount = $service->getVisits($url);
            return response()->json(['visits' => $visitsCount]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }
}
