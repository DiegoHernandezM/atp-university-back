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
            $table->text('section6_testimonials')->nullable();
            $table->text('section7_contact')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('landing_page_content', function (Blueprint $table) {
            $table->dropColumn('section6_testimonials');
            $table->dropColumn('section7_contact');
        });
    }
};
