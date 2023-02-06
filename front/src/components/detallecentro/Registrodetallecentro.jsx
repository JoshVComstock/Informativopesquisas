import React from "react";
import styled from "styled-components";
import {
  Divformulario,
  Form,
  Divh1,
  Divinput,
  Label,
  Input,
  Inputfile,
  Textarea,
  Botonagregar,
  Textarea1,
} from "../../style/crud";
import { useState } from "react";

const Registrodetallecentro = () => {
  const [nombre,setNombre]=useState("");
  const [direccion,setDireccion]=useState("");
  const [telefono,setTelefono]=useState(0);
  const [horario_atencion,setHorario_atencion]=useState(0);
  const [mapa,setMapa]=useState("");

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/detallecentros", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        direccion:direccion, 
        telefono:telefono,
        horario_atencion:horario_atencion, 
        mapa:mapa,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setNombre("");
      setDireccion("");
      setTelefono("");
      setHorario_atencion("");
      setMapa("");
    }
  };
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Nombre centro</Label>
          <Input type="text"value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Direccion</Label>
          <Input type="text" value={direccion} onChange={(e)=>setDireccion(e.target.value)}/>
        </Divinput>
        <Divinput>
          <Label htmlFor="">Telefono</Label>
          <Input type="number"value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Horario de atencion</Label>
          <Input type="time" value={horario_atencion} onChange={(e)=>setHorario_atencion(e.target.value)} />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Mapa</Label>
          <Inputmapa type="text" value={mapa} onChange={(e)=>setMapa(e.target.value)} />
        </Divinput>
        <Botonagregar onClick={enviar}>Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registrodetallecentro;
const Inputmapa=styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  outline: none;
  height: 25px;
  padding: 5px;
  font-size: 16px;
  width: 280px;
`;