<?php

use App\Models\Resource;
use App\Models\Student;
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
        Schema::create('student_resources', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Resource::class)->constrained();
            $table->foreignIdFor(Student::class)->constrained();
            $table->string("videoProgress")->nullable();
            $table->string("pageProgress")->nullable();
            $table->boolean("completed")->default(0);
            $table->timestamps();
            $table->unique(['resource_id', 'student_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_resources');
    }
};
