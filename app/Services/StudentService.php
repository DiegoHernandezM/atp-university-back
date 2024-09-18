<?php

namespace App\Services;

use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class StudentService
{
    protected $mStudent;

    public function __construct()
    {
        $this->mStudent = new Student();
    }

    public function getStudents()
    {
        return $this->mStudent->with('user')->get();
    }

    public function createStudent($data)
    {
        $emailPartsStudent = explode('@', $data['email']);
        $passwordBaseStudent = $emailPartsStudent[0] . '1234';
        $passwordStudent = Hash::make($passwordBaseStudent);
        $user = User::create([
            'name' => $data['name']. ' ' . $data['f_surname'],
            'email' => $data['email'],
            'password' => $passwordStudent
        ]);
        // dd($user->id);

        return Student::create([
            'name' => $data['name'],
            'f_surname' => $data['f_surname'],
            'm_surname' => $data['m_surname'],
            'gender' => $data['gender'],
            'phone' => $data['phone'],
            'address' => $data['address'],
            'zip_code' => $data['zip_code'],
            'city' => $data['city'],
            'country' => $data['country'],
            'user_id' => $user->id,
        ]);
    }

    public function updateStudent(Student $student, $data)
    {
        User::where('id', $student['user_id'])->update([
            'name' => $data['name'] . ' ' . $data['f_surname']
        ]);

        return $student->update($data);
    }

    public function delete(Student $student)
    {
        User::where('id', $student['user_id'])->delete();
        return $student->delete();
    }


}
