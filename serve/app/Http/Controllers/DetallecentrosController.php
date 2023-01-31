<?php

namespace App\Http\Controllers;
use App\Models\Detallecentros;
use Illuminate\Http\Request;

class DetallecentrosController extends Controller
{
    public function index()
    {
        return Detallecentros::all();
    }
    public function store(Request $request)
    {
        $detallecentro = new Detallecentros();
        $detallecentro->nombre = $request->nombre;
        $detallecentro->direccion = $request->direccion;
        $detallecentro->telefono = $request->telefono;
        $detallecentro->horario_atencion = $request->horario_atencion;
        $detallecentro->mapa = $request->mapa;
        $detallecentro->save();
        return response()->json(["mensaje"=>"Modificado satisfactoriamente"], 201);
    }
    public function update(Request $request, $id)
    {
        $detallecentro = Detallecentros::find($id);
        $detallecentro->nombre = $request->nombre;
        $detallecentro->direccion = $request->direccion;
        $detallecentro->telefono = $request->telefono;
        $detallecentro->horario_atencion = $request->horario_atencion;
        $detallecentro->mapa = $request->mapa;
        $detallecentro->save();
        return response()->json(["mensaje"=>"Modificado satisfactoriamente"], 201);
    }
    public function destroy($id)
    {
        return Detallecentros::destroy($id);
    }
}
