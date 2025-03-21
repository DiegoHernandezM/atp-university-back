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
        Schema::table('landing_page_content', function (Blueprint $table) {
            $table->string('section3_image_mision')->nullable();
            $table->string('section3_image_vision')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('landing_page_content', function (Blueprint $table) {
            $table->dropColumn('section3_image_mision');
            $table->dropColumn('section3_image_vision');
        });
    }
};
