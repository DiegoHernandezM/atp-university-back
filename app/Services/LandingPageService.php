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

    public function store($request)
    {
        $data = $request->all();

        if ($request->hasFile('section1_video')) {
            $file = $request->file('section1_video');
            $this->content->update(['section1_video' => $this->saveFile('section1_video', $file)]);
        }
        foreach ($data['section2_counts'] as $key => $count) {
            $file = $count['image'];
            if ($file instanceof UploadedFile) {
                $fileName = $this->saveFile('section2_counts', $file, $key, 'image');
                $data['section2_counts'][$key]['image'] = $fileName;
            }
        }

        foreach ($data['section4_services'] as $key => $service) {
            $file = $service['image'];
            if ($file instanceof UploadedFile) {
                $fileName = $this->saveFile('section4_services', $file, $key, 'image');
                $data['section4_services'][$key]['image'] = $fileName;
            }
        }

        foreach ($data['section5_simulators'] as $key => $simulator) {
            $file = $simulator['file'];
            if ($file instanceof UploadedFile) {
                $fileName = $this->saveFile('section5_simulators', $file, $key, 'file');
                $data['section5_simulators'][$key]['file'] = $fileName;
            }
        }

        $this->content->update([
            'title' => $data['title'],
            'section1_video_description' => $data['section1_video_description'],
            'section2_counts' => $data['section2_counts'],
            'section3_image' => $data['section3_image'],
            'section3_vision' => $data['section3_vision'],
            'section3_mission' => $data['section3_mission'],
            'section4_services' => $data['section4_services'],
            'section5_simulators' => $data['section5_simulators']
        ]);

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
