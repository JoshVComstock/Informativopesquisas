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
import { useState, useEffect } from "react";
import { postCapsulas, updateCapsulas } from "../../services/capsulas";
import { getBase64 } from "../../services/converter";

const Registrocapsulas = ({ getApi, actual, setActual }) => {
  const [titulo, setTitulo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [masdetalle, setMasdetalle] = useState("");

  const llenarimagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setTitulo(actual.titulo);
      setDescripcion(actual.descripcion);
      setFoto(actual.foto);
      setMasdetalle(actual.mas_detalles);
    }
  }, [actual]);

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
              <Input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
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
              <Tarearegistro
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label>Descripcion detallada</Label>
              <Tarearegistro1
                type="text"
                value={masdetalle}
                onChange={(e) => setMasdetalle(e.target.value)}
              ></Tarearegistro1>
            </Divinput>
          </Divtextarea>
        </Divinputotal>

        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateCapsulas(
                {
                  id: actual.id,
                  titulo: titulo,
                  foto: foto,
                  descripcion: descripcion,
                  mas_detalles: masdetalle,
                },
                () => {
                  setActual({});
                  setTitulo("");
                  setFoto("");
                  setDescripcion("");
                  setMasdetalle("");
                  getApi();
                }
              );
            } else {
              postCapsulas(titulo, foto, descripcion, masdetalle, () => {
                setTitulo("");
                setFoto("");
                setDescripcion("");
                setMasdetalle("");
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
