<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('course', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->longText('occupation_area');
            $table->string('area');
            $table->string('workload');
            $table->string('duration');
            $table->string('local');
            $table->string('course_types');
            $table->string('mode');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('course');
    }
};
