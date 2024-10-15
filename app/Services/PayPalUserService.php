<?php

namespace App\Services;

use App\Mail\WelcomeStudentMail;
use App\Models\Course;
use App\Models\PayPalUser;
use App\Models\Student;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class PayPalUserService
{
    protected $mUser;
    protected $mPayPal;
    protected $mStudent;
    protected $mCourse;

    public function __construct()
    {
        $this->mUser = new User();
        $this->mPayPal = new PayPalUser();
        $this->mStudent = new Student();
        $this->mCourse = new Course();
    }


    public function create($request)
    {
        // Buscar el curso
        $password = $request->password ?? 'secret1234';
        $course = $this->mCourse->find($request->course['id']);
        $user = $this->mUser->find((int)$request->order['reference_id']);
        $user->assignRole('student');
        if($user->stand_by === 1) {
            $user->password = Hash::make($password);
        }
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
            $student = $this->mStudent->create([
                'name' => $user->name,
                'address' => $request->order['shipping']['address']['address_line_1'],
                'zip_code' => $request->order['shipping']['address']['postal_code'],
                'city' => $request->order['shipping']['address']['admin_area_2'],
                'user_id' => $user->id,
            ]);

            $student->courses()->attach($course->id);
            Mail::to($user->email)->send(new WelcomeStudentMail($user, $password));
        }
        return "Estudiante registrado";
    }
}
