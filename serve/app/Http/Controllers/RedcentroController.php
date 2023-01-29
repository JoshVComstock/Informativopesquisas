<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Redcentros;

class RedcentroController extends Controller
{
    public function index()
    {
        return Redcentros::all();
    }
    public function store(Request $request)
    {
        $redcentros= new Redcentros();
        $redcentros->red=$request->red;

        $redcentros->id_detallecenstro = $request->id_detallecenstro;

        $redcentros->save();
        
        return response()->json(["mensaje"=>"Modificado satisfactoriamente"], 201);
    }
    public function update(Request $request, $id)
    {
        $centredcentrosros= Redcentros::find($id);
        $redcentros->red=$request->red;

        $redcentros->id_detallecenstro = $request->id_detallecenstro;
        
        $redcentros->save();
        return response()->json(["mensaje"=>"Modificado satisfactoriamente"], 201);
    }
    public function destroy($id)
    {
        return Redcentros::destroy($id);
    }
}
