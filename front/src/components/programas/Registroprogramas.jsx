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
const Registroprogramas = () => {
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [contenido_a, setContenido_a] = useState("");
  const [contenido_b, setContenido_b] = useState("");
  const [titulo, setTitulo] = useState("");
  const [titulo_desc, setTitulo_desc] = useState("");
  const [compemento, setCompemento] = useState("");

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/portada", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        foto: foto,
        contenido_a: contenido_a,
        contenido_b: contenido_b,
        titulo: titulo,
        titulo_desc: titulo_desc,
        compemento: compemento,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setNombre("");
      setFoto("");
      setContenido_a("");
      setContenido_b("");
      setTitulo("");
      setTitulo_desc("");
      setCompemento("");
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
        <Divtotal>
          <Divtext1>
            <Divinput>
              <Label htmlFor="">Nombre</Label>
              <Input type="text"  value={nombre} onChange={(e)=>setNombre(e.target.value)} />
              <Divinput>
                <Label>Foto</Label>
                <Inputfile type="file" />
                <Imgfile src="" alt="" />
              </Divinput>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Complemento</Label>
              <Input type="text" value={compemento} onChange={(e)=>setCompemento(e.target.value)} />
            </Divinput>
          </Divtext1>
          <Divtext2>
            <Divinput>
              <Label htmlFor="">Titulo descripcion</Label>
              <Input type="text" value={titulo_desc} onChange={(e)=>setTitulo_desc(e.target.value)} />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Contenido B</Label>
              <Tarearegistro1 type="text" value={contenido_b} onChange={(e)=>setContenido_b(e.target.value)} />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Contenido A</Label>
              <Tarearegistro1 type="text" />
            </Divinput>
          </Divtext2>
        </Divtotal>
        <Botonagregar>Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroprogramas;

const Divtotal = styled.div`
  display: flex;
`;
const Divtext1 = styled.div`
  margin: 5px;
`;
const Divtext2 = styled.div`
  margin: 5px;
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
