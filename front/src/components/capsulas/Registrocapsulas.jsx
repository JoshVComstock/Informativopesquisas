import React from "react";
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
import styled from "styled-components";
import { useState } from "react";

const Registrocapsulas = () => {
  const [titulo, setTitulo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcionbreve, setDescripcionbreve] = useState("");
  const [descripciondetallada, setDescripciondetallada] = useState("");

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/capsula", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        foto: foto,
        descripcion: descripcionbreve,
        mas_detalles: descripciondetallada,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setTitulo("");
      setFoto("");
      setDescripcionbreve("");
      setDescripciondetallada("");
    }
  };
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      return console.log("Error: ", error);
    };
  };

  const llenarimagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };

  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinputotal>
          <Divinputtextp>
            <Divinput>
              <Label htmlFor="">Titulo</Label>
              <Input type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
            </Divinput>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" onChange={llenarimagen} />
              <Imgfile src={foto} alt="" />
            </Divinput>
          </Divinputtextp>
          <Divtextarea>
            <Divinput>
              <Label htmlFor="">Descripcion breve</Label>
              <Tarearegistro type="text" value={descripcionbreve} onChange={(e)=>setDescripcionbreve(e.target.value)} />
            </Divinput>
            <Divinput>
              <Label>Descripcion detallada</Label>
              <Tarearegistro1 type="text" value={descripciondetallada} onChange={(e)=>setDescripciondetallada(e.target.value)}></Tarearegistro1>
            </Divinput>
          </Divtextarea>
        </Divinputotal>

        <Botonagregar onClick={enviar}>Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registrocapsulas;

const Divtextarea = styled.div`
  margin: 5px;
`;
const Divinputtextp = styled.div`
  margin: 5px;
`;
const Divinputotal = styled.div`
  display: flex;
`;
const Tarearegistro = styled.textarea`
  height: 50px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;
const Tarearegistro1 = styled.textarea`
  height: 80px;
  width: 250px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
