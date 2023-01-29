<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedcentroTable extends Migration
{
    // una red puede tener varios centros 

    public function up()
    {
        Schema::create('redcentro', function (Blueprint $table) {
            $table->id(); 
            $table->string('red',200);
            
            $table->foreignId('id_detallecentro')->constrained('detallecentro')->cascadeOnUpdate()->cascadeOnDelete();

            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('redcentro');
    }
}
