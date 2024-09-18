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

    public function getInformations()
    {
        return $this->mConcact->where('status', false)->get();
    }

    public function destroy(ContactForm $person)
    {
        return $person->delete();
    }
}
