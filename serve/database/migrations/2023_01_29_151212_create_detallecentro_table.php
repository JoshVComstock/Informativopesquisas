<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetallecentroTable extends Migration
{
    
    public function up()
    {
        Schema::create('detallecentro', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('direccion');
            $table->string('telefono');
            $table->string('horario_atencion');
            $table->string('mapa');

            $table->timestamps();
        });
    }

  
    public function down()
    {
        Schema::dropIfExists('detallecentro');
    }
}
