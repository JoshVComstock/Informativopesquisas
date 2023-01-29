<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Principal;

class PrincipalController extends Controller
{
    // funcion retorno todos los valores
    public function index()
    {
        $principal=Principal::all();
        foreach($principal as $pri)
        { 
          if($pri->foto!=null)
          {
            $pri->foto=stream_get_contents($pri->foto);

          }

        }
        return $principal;
    }
    public function store(Request $request)
    {
        $nuevo = new Portada();
        $nuevo->titulo = $request->titulo;
        $nuevo->foto = $request->foto;
        $nuevo->descripcion = $request->descripcion;
        $nuevo->save();
        
        return response()->json(["mensaje"=>"Creado satisfactoriamente"], 201);
    }


    public function update(Request $request, $id)
    {
        $nuevo = Principal::find($id);
        $nuevo->titulo = $request->titulo;
        $nuevo->descripcion = $request->descripcion;
        $nuevo->foto = $request->foto;
        $nuevo->save();
        
        return response()->json(["mensaje"=>"Modificado satisfactoriamente"], 201);
    }

    public function destroy($id)
    {
        return Principal::destroy($id);
    }


}
