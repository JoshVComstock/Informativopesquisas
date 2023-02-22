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
import { useState, useEffect } from "react";
import { update } from "../../services/portada";
import { postPortada } from "../../services/portada";
import { getBase64 } from "../../services/converter";
const Registroportada = ({ getApi, actual, setActual, can }) => {
  const [titulo, setTitulo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const llenarImagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };

  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setTitulo(actual.titulo);
      setDescripcion(actual.descripcion);
      setFoto(actual.foto);
    }
  }, [actual]);
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
          <Inputfile type="file" onChange={llenarImagen} />
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
        <Botonagregar
          disabled={can > 0 && Object.keys(actual).length === 0}
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              update(
                {
                  id: actual.id,
                  titulo: titulo,
                  foto: foto,
                  descripcion: descripcion,
                },
                () => {
                  setActual({});
                  setTitulo("");
                  setFoto("");
                  setDescripcion("");
                  getApi();
                }
              );
            } else {
              postPortada(titulo, foto, descripcion, () => {
                setTitulo("");
                setFoto("");
                setDescripcion("");
                getApi();
              });
            }
          }}
        >
          {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
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
