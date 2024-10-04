<?php

namespace App\Services;

use App\Models\LandingPageContent;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class LandingPageService
{
    protected $content;

    public function __construct()
    {
        $this->content = LandingPageContent::first();
    }

    public function createWelcomeSection($request)
    {
        $data = $request->all();

        if ($request->hasFile('section1_video')) {
            $files = $request->file('section1_video');
            if (is_array($files)) {
                foreach ($files as $file) {
                    $this->content->update([
                        'section1_video' => $this->saveFile('section1_video', $file),
                        'title' => $data['title'],
                        'section1_video_description' => $data['section1_video_description']
                    ]);
                }
            }
        } else {
            $this->content->update([
                'title' => $data['title'],
                'section1_video_description' => $data['section1_video_description']
            ]);
        }
        return $this->content;
    }

    public function createMetrictsSection($request)
    {
        $data = $request->all();
        if (isset($data['section2_counts'])) {
            $metricts = json_encode($data['section2_counts']);
            $this->content->update([
                'section2_counts' => $metricts,
            ]);
        }
        return $this->content;
    }

    public function createAboutSection($request)
    {
        $data = $request->all();

        if ($request->hasFile('section3_image')) {
            $files = $request->file('section3_image');
            if (is_array($files)) {
                foreach ($files as $file) {
                    $this->content->update([
                        'section3_image' => $this->saveFile('section3_image', $file),
                        'section3_about' => $data['section3_about'],
                        'section3_mission' => $data['section3_mission'],
                        'section3_vision' => $data['section3_vision']
                    ]);
                }
            }
        } else {
            $this->content->update([
                'section3_about' => $data['section3_about'],
                'section3_mission' => $data['section3_mission'],
                'section3_vision' => $data['section3_vision']
            ]);
        }
        return $this->content;
    }

    public function createServicesSection($request)
    {
        $data = $request->all();
        foreach ($data['section4_services'] as $key => $service) {

            if (isset($service['button_image']['file']) && $service['button_image']['file'] instanceof UploadedFile) {
                $file = $service['button_image']['file'];
                $fileName = $this->saveFile('button_image', $file, $key, 'button_image');
                $data['section4_services'][$key]['button_image']['url'] = $fileName;
            }

            if (isset($service['background_image']['file']) && $service['background_image']['file'] instanceof UploadedFile) {
                $file = $service['background_image']['file'];
                $fileName = $this->saveFile('background_image', $file, $key, 'background_image');
                $data['section4_services'][$key]['background_image']['url'] = $fileName;
            }
        }

        $this->content->section4_services = json_encode($data['section4_services']);
        $this->content->save();
        return $this->content;
    }

    public function createSimulatorsSection($request)
    {
        $data = $request->all();
        foreach ($data['section5_simulators'] as $key => $service) {

            if (isset($service['image']['file']) && $service['image']['file'] instanceof UploadedFile) {
                $file = $service['image']['file'];
                $fileName = $this->saveFile('image', $file, $key, 'image');
                $data['section5_simulators'][$key]['image']['url'] = $fileName;
            }
        }

        $this->content->section5_simulators = json_encode($data['section5_simulators']);
        $this->content->save();
        return $this->content;
    }

    public function createTestimonialsSection($request)
    {
        $data = $request->all();

        foreach ($data['section6_testimonials'] as $key => $service) {

            if (isset($service['image']['file']) && $service['image']['file'] instanceof UploadedFile) {
                $file = $service['image']['file'];
                $fileName = $this->saveFile('image', $file, $key, 'image');
                $data['section6_testimonials'][$key]['image']['url'] = $fileName;
            }
        }

        $this->content->section6_testimonials = json_encode($data['section6_testimonials']);
        $this->content->save();
        return $this->content;
    }

    public function createContactSection($request)
    {
        $data = $request->all();
        $this->content->section7_contact = json_encode($data['section7_contact']);
        $this->content->save();
        return $this->content;
    }


    public function store($request)
    {
        $data = $request->all();
        $section = $data['section'];

        switch ($section) {
            case 'welcome':
                $this->createWelcomeSection($request);
                break;

            case 'metricts':
                $this->createMetrictsSection($request);
                break;

            case 'about':
                $this->createAboutSection($request);
                break;

            case 'services':
                $this->createServicesSection($request);
                break;

            case 'simulators':
                $this->createSimulatorsSection($request);
                break;

            case 'testimonials':
                $this->createTestimonialsSection($request);
                break;

            case 'contact':
                $this->createContactSection($request);
                break;
        }

        return $this->content;
    }

    public function saveFile($field, $file, $key = null, $subField = null)
    {
        $fieldValue = $this->content->{$field};
        $savedFileName = null;
        if ($fieldValue && isset($key) && json_validate($fieldValue) && isset($subField)) {
            $decode = json_decode($this->content->{$field}, true);
            if (isset($decode[$key])) {
                $savedFileName = $decode[$key][$subField];
            }
        } else {
            $savedFileName = $fieldValue;
        }
        if (strpos($savedFileName, $file->getClientOriginalName()) == false) {
            if (Storage::disk('public')->exists('images/' . $savedFileName)) {
                Storage::disk('public')->delete('images/' . $savedFileName);
            }
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->storeAs('public/images', $fileName);
            return $fileName;
        } else {
            return $savedFileName;
        }
    }
}
