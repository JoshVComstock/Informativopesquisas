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
  const [redes,setRedes]=useState("");
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
        red: redes,
        id_detallecentros: id_detallecentro,
      }),
    });

    const respuesta = await response?.json();
    
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setRedes("");
      setId_detallecentro(0);
    }
  };

  async function mostrardetallecentro() {
    const response = await fetch("http://127.0.0.1:8000/api/detallecentros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setDetallecentro(respuesta);
  }

  useEffect(() => {
    mostrardetallecentro();
    console.log(id_detallecentro);
  }, []);
  
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Red</Label>
          <Input type="text" value={redes} onChange={(e)=>setRedes(e.target.value)} />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Detalle red</Label>
          <Select name="select" onChange={(e)=>setId_detallecentro(e.target.value)}>
            {detallecentro.map((v, i) => (
              <option key={i} value={v.id} >{v.nombre}</option>
            ))}
          </Select>
        </Divinput>
        <Botonagregar onClick={enviar} >Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroredcentros;

const Select = styled.select`
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

