<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramaTable extends Migration
{
  
    public function up()
    {
        Schema::create('programa', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->binary('foto')->nullable();
            $table->string('contenido_a');
            $table->string('contenido_b');
            $table->string('titulo');
            $table->string('titulo_desc');
            $table->string('compemento');
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
        Schema::dropIfExists('programa');
    }
}
