<?php

namespace App\Http\Controllers;

use App\Services\DashboardService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function getDataLanding(DashboardService $service)
    {
        try {
            $data = $service->getLanding();
            return Inertia::render('Dashboard', [
                'data' => $data
            ]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }
    public function getDataStudent(DashboardService $service)
    {
        try {
            $data = $service->getStudent();
            return Inertia::render('DashboardStudent', [
                'data' => $data
            ]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }

    public function getDataUniversity(DashboardService $service)
    {
        try {
            $data = $service->getUniveristy();
            return Inertia::render('DashboardUniversity', [
                'data' => $data
            ]);
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }

    public function getDataBalance($year, DashboardService $service)
    {
        try {
            $data = $service->getBalance($year);
            return $data;
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }
}
