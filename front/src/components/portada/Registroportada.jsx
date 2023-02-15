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
} from "../../style/crud";
import { useState } from "react";
import { UseFech } from "../../hooks/useFech";
import { getPortada } from "../../services/portada";
const Registroportada = () => {
  const [titulo, setTitulo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {getApi}=UseFech(getPortada);

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/principales", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        foto: foto,
        descripcion: descripcion,
      }),
    });
    if (response.ok) {
      setTitulo("");
      setFoto("");
      setDescripcion("");
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
        <Divinput>
          <Label htmlFor="">Titulo</Label>
          <Input
            type="text"
            name="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label>Foto</Label>
          <Inputfile type="file" onChange={llenarimagen} />
          <Imgfile src={foto} alt="" />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Descripcion</Label>
          <Textareaportada
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Divinput>
        <Botonagregar onClick={enviar}>Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroportada;
const Textareaportada = styled.textarea`
  width: 300px;
  height: 100px;
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
