import React, { useState, useEffect } from "react";
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

const Registroredcentros = () => {
  const [detallecentro, setDetallecentro] = useState([]);
  const [red,setRed]=useState("");
  const [id_detallecentro,setId_detallecentro]=useState(0);

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/red", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        red: red,
      }),
    });

    const respuesta = await response?.json();
    
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setRed("");
    }
  };
  
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Red</Label>
          <Input type="text" value={red} onChange={(e)=>setRed(e.target.value)} />
        </Divinput>
        {/*<Divinput>
          <Label htmlFor="">Detalle red</Label>
          <Select name="select" onChange={(e)=>setId_detallecentro(e.target.value)}>
            {detallecentro.map((v, i) => (
              <option key={i} value={v.id} >{v.nombre}</option>
            ))}
          </Select>
            </Divinput>*/}
        <Botonagregar onClick={enviar} >Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroredcentros;


