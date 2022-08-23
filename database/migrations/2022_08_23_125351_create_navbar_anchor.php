<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('navbar_anchor', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('href');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('navbar_anchor');
    }
};
