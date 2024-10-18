<?php

namespace App\Services;

use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use App\Mail\WelcomeStudentMail;
use Illuminate\Support\Facades\Mail;

class StudentService
{
    protected $mStudent;

    public function __construct()
    {
        $this->mStudent = new Student();
    }

    public function getStudents()
    {
        return $this->mStudent->with('user')->with('courses')->get();
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
        $user->assignRole('student');

        $student = Student::create([
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

        if(count($data['courses'])) {
            foreach ($data['courses'] as $course) {
                $student->courses()->attach($course);
            }
        }

        Mail::to($user->email)->send(new WelcomeStudentMail($user, $passwordBaseStudent));
    }

    public function updateStudent(Student $student, $data)
    {
        User::where('id', $student['user_id'])->update([
            'name' => $data['name'] . ' ' . $data['f_surname']
        ]);
        $student->name = $data['name'];
        $student->f_surname = $data['f_surname'];
        $student->m_surname = $data['m_surname'];
        $student->gender = $data['gender'];
        $student->phone = $data['phone'];
        $student->address = $data['address'];
        $student->zip_code = $data['zip_code'];
        $student->city = $data['city'];
        $student->country = $data['country'];
        $student->save();

        if (isset($data['courses']) && count($data['courses'])) {
            $student->courses()->sync($data['courses']);
        }
    }

    public function delete(Student $student)
    {
        User::where('id', $student['user_id'])->delete();
        return $student->delete();
    }
}
