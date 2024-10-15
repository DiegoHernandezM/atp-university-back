<?php

namespace App\Http\Controllers;

use App\Services\PayPalUserService;
use Illuminate\Http\Request;

class PayPalUserController
{

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request, PayPalUserService $service)
    {
        try {
            $service->create($request);
            return response()->json(['success' => true, 'message' => 'Pago procesado exitosamente']);
        } catch(\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Hubo un problema al procesar el pago.'], 500);
        }
    }

    public function getClientId()
    {
        return response()->json([
            'client_id' => config('services.paypal.client_id')
        ]);
    }

}
