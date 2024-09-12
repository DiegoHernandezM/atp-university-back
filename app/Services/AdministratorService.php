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
        return $this->mUser->all();
    }

    public function createAdministrator($data)
    {
        return User::create($data);
    }
}
