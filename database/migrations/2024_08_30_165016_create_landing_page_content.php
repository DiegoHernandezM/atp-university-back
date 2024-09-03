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
            $table->string('section1_video')->nullable();
            $table->text('section1_video_description')->nullable();
            $table->json('section2_counts')->default('[{ "title": "", "quantity": "", "image": null }]')->nullable();
            $table->string('section3_image')->nullable();
            $table->text('section3_vision')->nullable();
            $table->text('section3_mission')->nullable();
            $table->json('section4_services')->default('[{ "title": "", "link": "", "image": null }]')->nullable();
            $table->json('section5_simulators')->default('[{ "title": "", "description": "", "file": null }]')->nullable();
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
