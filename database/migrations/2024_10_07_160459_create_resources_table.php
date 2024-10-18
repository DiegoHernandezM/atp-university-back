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
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lesson_id')->constrained('lessons')->onDelete('cascade'); // Relación con la lección
            $table->string('type'); // Tipo de recurso: 'video', 'pdf', 'document', etc.
            $table->string('url'); // URL completa del recurso en S3
            $table->string('s3_key'); // Clave del archivo en S3 (nombre del archivo en S3)
            $table->string('title')->nullable(); // Título opcional del recurso
            $table->integer('size')->nullable(); // Tamaño del archivo en bytes
            $table->string('mime_type')->nullable(); // Tipo MIME del archivo (video/mp4, application/pdf, etc.)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
