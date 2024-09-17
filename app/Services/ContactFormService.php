<?php

namespace App\Services;

use App\Models\ContactForm;

class ContactFormService
{
    protected $mConcact;

    public function __construct()
    {
        $this->mConcact = new ContactForm();
    }

    public function create($data)
    {
        return $this->mConcact->create($data);
    }
}
