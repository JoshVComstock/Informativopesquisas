<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformacionTable extends Migration
{
 
    public function up()
    {
        Schema::create('informacion', function (Blueprint $table) {
            $table->id(); 
            $table->string('nombre');
            $table->binary('foto')->nullable();
            $table->string('descripcion');
            $table->string('mision');
            $table->binary('foto_m')->nullable();

            $table->string('vision');
            $table->binary('foto_v')->nullable();
            
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
        Schema::dropIfExists('informacion');
    }
}
