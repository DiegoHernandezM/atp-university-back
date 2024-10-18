<?php

namespace App\Services;

use App\Models\User;

class AdministratorService
{
    protected $mUser;

    public function __construct()
    {
        $this->mUser = new User();
    }

    public function getAdministrators()
    {
        return $this->mUser->orWhereDoesntHave('student')->get();
    }

    public function createAdministrator($data)
    {
        $user = User::create($data);
        $user->assignRole('admin');
        return $user;
    }

    public function updateAdministrator(User $user, $data)
    {
        if (empty($data['password'])) {
            unset($data['password']);
        }
        return $user->update($data);
    }

    public function delete(User $user)
    {
        return $user->delete();
    }
}
