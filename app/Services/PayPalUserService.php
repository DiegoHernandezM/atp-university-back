<?php

namespace App\Services;

use App\Models\PayPalUser;
use App\Models\Student;
use App\Models\User;
use Carbon\Carbon;

class PayPalUserService
{
    protected $mUser;
    protected $mPayPal;
    protected $mStudent;

    public function __construct()
    {
        $this->mUser = new User();
        $this->mPayPal = new PayPalUser();
        $this->mStudent = new Student();
    }


    public function create($request)
    {

        $user = $this->mUser->find((int)$request->order['reference_id']);
        $user->stand_by = false;
        $user->save();
        $createTime = Carbon::parse($request->order['payments']['captures'][0]['create_time'])->format('Y-m-d H:i:s');
        $savedUser = $this->mPayPal->create([
            'user_id' => (int)$request->order['reference_id'],
            'address' => json_encode($request->order['shipping']['address']),
            'amount' => $request->order['amount']['value'],
            'payment_id' => $request->order['payments']['captures'][0]['id'],
            'status' => $request->order['payments']['captures'][0]['status'],
            'create_time' => $createTime
        ]);

        if ($savedUser) {
            $this->mStudent->create([
                'name' => $user->name,
                'address' => $request->order['shipping']['address']['address_line_1'],
                'zip_code' => $request->order['shipping']['address']['postal_code'],
                'city' => $request->order['shipping']['address']['admin_area_2'],
                'user_id' => $user->id,
            ]);
        }
        return "Estudiante registrado";
    }
}
