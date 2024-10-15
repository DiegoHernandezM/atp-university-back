<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('paypal_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id');
            $table->longText('address')->nullable();
            $table->float('amount');
            $table->text('payment_id')->nullable();
            $table->text('status')->nullable();
            $table->dateTime('create_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_paypal_user');
    }
};