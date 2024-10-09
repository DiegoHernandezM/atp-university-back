<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandingPageContent extends Model
{
    use HasFactory;

    protected $table = 'landing_page_content';
    protected $fillable = ['title', 'section1_video', 'section1_video_description', 'section2_counts', 'section3_image', 'section3_about', 'section3_vision', 'section3_mission', 'section4_services', 'section5_simulators'];

    /**
     * Accessor para obtener 'section2_counts' como un arreglo.
     *
     * @return array
     */
}
