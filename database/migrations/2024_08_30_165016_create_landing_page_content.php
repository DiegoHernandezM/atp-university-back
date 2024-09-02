<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('landing_page_content', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('section1_video');
            $table->string('section1_video_description');
            $table->json('section2_counts');
            $table->json('section3_image');
            $table->json('section3_vision');
            $table->json('section3_mission');
            $table->json('section4_services');
            $table->json('section5_simulators');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landing_page_content');
    }
};
