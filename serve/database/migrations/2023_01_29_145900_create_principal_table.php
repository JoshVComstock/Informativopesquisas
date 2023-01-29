<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrincipalTable extends Migration
{

    public function up()
    {
        Schema::create('principal', function (Blueprint $table) {
            $table->id(); 
            $table->string('titulo',300);
            $table->string('descripcion',500);
            $table->binary('foto')->nullable();
            $table->timestamps();
        });
    }
  
    public function down()
    {
        Schema::dropIfExists('principal');
    }
}
