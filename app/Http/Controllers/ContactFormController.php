<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Models\LandingPageContent;
use App\Services\ContactFormService;
use Inertia\Inertia;
use Stevebauman\Location\Facades\Location;

class ContactFormController extends Controller
{
    public function store(ContactFormRequest $request, ContactFormService $service)
    {
        try {
            $validated = $request->validated();

            $ipAddress = $request->ip();
            $location = Location::get($ipAddress);
            $validated['ip_address'] = $ipAddress;
            $validated['country'] = $location->countryName ?? 'Desconocido';
            $validated['city'] = $location->cityName ?? 'Desconocido';
            $service->create($validated);
            return Inertia::location(url('/') . '#contact');
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
