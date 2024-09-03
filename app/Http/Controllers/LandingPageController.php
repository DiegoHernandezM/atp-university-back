<?php

namespace App\Http\Controllers;

use App\Models\LandingPageContent;
use App\Services\LandingPageService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    public function __construct(private LandingPageService $landingPageService) {}

    public function edit(Request $request): Response
    {
        return Inertia::render('Landing/Edit', [
            'landingData' => LandingPageContent::first()
        ]);
    }

    public function store(Request $request)
    {
        $this->landingPageService->store($request);

        return Inertia::render('Landing/Edit', [
            'landingData' => LandingPageContent::first()
        ]);
    }
}
