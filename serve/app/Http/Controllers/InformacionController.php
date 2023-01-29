<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Informacion;

class InformacionController extends Controller
{
    public function index()
    {
        $informacion=Informacion::all();
        foreach($informacion as $info)
        { 
          if($info->foto!=null)
          {
            $info->foto=stream_get_contents($info->foto);
          }
        }
        return $informacion;
    }

    public function store(Request $request)
    {
         {
           
           $info = new Informacion();
           $info->nombre = $request->nombre;
           $info->foto = $request->foto;
           $info->descripcion = $request->descripcion;
           $info->mision = $request->mision;
           $info->foto_m = $request->foto_m;
           $info->vision = $request->vision;
           $info->foto_v = $request->foto_v;
           $info->pagina = $request->pagina;
           $info->save();
           
           return response()->json(["mensaje"=>"Creado satisfactoriamente"], 201);
       }
    }
    public function update(Request $request, $id)
    {
        $info=Informacion::find($id);
        $info->nombre = $request->nombre;
        $info->foto = $request->foto;
        $info->descripcion = $request->descripcion;
        $info->mision = $request->mision;
        $info->foto_m = $request->foto_m;
        $info->vision = $request->vision;
        $info->foto_v = $request->foto_v;
        $info->pagina = $request->pagina;
        $info->save();
        
        return response()->json(["mensaje"=>"Creado satisfactoriamente"], 201);
    }

    public function destroy($id)
    {
        return Informacion::destroy($id);
    }
}
