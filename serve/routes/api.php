<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\CentrosController;
use App\Http\Controllers\DetallecentrosController;
use App\Http\Controllers\InformacionController;
use App\Http\Controllers\PrincipalController;
use App\Http\Controllers\ProgramaController;
use App\Http\Controllers\RedcentroController;
use App\Http\Controllers\CapsulasController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/centros', [CentrosController::class, 'index']);
Route::post('/Centros', [CentrosController::class, 'store']);
Route::delete('/Centros/{id}', [CentrosController::class, 'destroy']);

Route::get('/Detallecentros', [DetallecentrosController::class, 'index']);
Route::post('/Detallecentros', [DetallecentrosController::class, 'store']);
Route::delete('/Detallecentros/{id}', [DetallecentrosController::class, 'destroy']);

Route::get('/informacion', [InformacionController::class, 'index']);
Route::post('/informacion', [InformacionController::class, 'store']);
Route::delete('/informacion/{id}', [InformacionController::class, 'destroy']);

Route::get('/Principal', [PrincipalController::class, 'index']);
Route::post('/Principal', [PrincipalController::class, 'store']);
Route::delete('/Principal/{id}', [PrincipalController::class, 'destroy']);

Route::get('/Programa', [ProgramaController::class, 'index']);
Route::post('/Programa', [ProgramaController::class, 'store']);
Route::delete('/Programa/{id}', [ProgramaController::class, 'destroy']);

Route::get('/red', [RedcentroController::class, 'index']);
Route::post('/red', [RedcentroController::class, 'store']);
Route::delete('/red/{id}', [RedcentroController::class, 'destroy']);


Route::get('/capsula', [CapsulasController::class, 'index']);
Route::post('/capsula', [CapsulasController::class, 'store']);
Route::delete('/capsula/{id}', [CapsulasController::class, 'destroy']);