<?php

namespace App\Services;

use App\Models\Visit;

class VisitServices
{
    public function registerVisit($url)
    {
        $visit = Visit::firstOrCreate(
            ['url' => $url],
            ['count' => 0]
        );
        $visit->increment('count');
        return $visit->count;
    }

    public function getVisits($url)
    {
        $visit = Visit::where('url', $url)->first();
        return $visit ? $visit->count : 0;
    }
}
