<?php

namespace App\Http\Controllers;

use App\Models\LandingPageContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('Landing/Edit', [
            'landingData' => LandingPageContent::first()
        ]);
    }

    public function store(Request $request)
    {
        $content = LandingPageContent::first();
        $data = $request->all();

        if ($request->hasFile('section1_video')) {
            $file = $request->file('section1_video');
            if (strpos($content->section1_video, $file->getClientOriginalName()) == false) {
                if (Storage::disk('public')->exists('images/' . $content->section1_video)) {
                    Storage::disk('public')->delete('images/' . $content->section1_video);
                }
                $section1_video = time() . '_' . $file->getClientOriginalName();
                $file->storeAs('public/images', $section1_video);
                $content->update(['section1_video' => $section1_video]);
            }
        }
        // return $data;
        $content->update([
            'title' => $data['title'],
            'section1_video_description' => $data['section1_video_description'],
            'section2_counts' => $data['section2_counts'],
            'section3_image' => $data['section3_image'],
            'section3_vision' => $data['section3_vision'],
            'section3_mission' => $data['section3_mission'],
            'section4_services' => $data['section4_services'],
            'section5_simulators' => $data['section5_simulators']
        ]);

        return Inertia::render('Landing/Edit', [
            'landingData' => LandingPageContent::first()
        ]);
    }
}
