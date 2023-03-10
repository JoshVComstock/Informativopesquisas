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
  Botonagregar,
} from "../../style/crud";
import { useState, useEffect } from "react";
import { getBase64 } from "../../services/converter";
import { postPrograma, updatePrograma } from "../../services/programa";
const Registroprogramas = ({ getApi, actual, setActual, can }) => {
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [contenido_a, setContenido_a] = useState("");
  const [contenido_b, setContenido_b] = useState("");
  const [titulo, setTitulo] = useState("");
  const [titulo_desc, setTitulo_desc] = useState("");
  const [compemento, setCompemento] = useState("");

  const llenarimagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setFoto(actual.foto);
      setContenido_a(actual.contenido_a);
      setContenido_b(actual.contenido_b);
      setTitulo(actual.titulo);
      setTitulo_desc(actual.titulo_desc);
      setCompemento(actual.compemento);
    }
  }, [actual]);
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divtotal>
          <Divtext1>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" onChange={llenarimagen} />
              <Imgfile src={foto} alt="" />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Titulo A</Label>
              <Input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Contenido A</Label>
              <Tarearegistro1
                type="text"
                value={contenido_a}
                onChange={(e) => setContenido_a(e.target.value)}
              />
            </Divinput>
          </Divtext1>
          <Divtext2>
            <Divinput>
              <Label htmlFor="">Titulo complemento</Label>
              <Input
                type="text"
                value={titulo_desc}
                onChange={(e) => setTitulo_desc(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Complemento</Label>
              <Tarearegistro1
                type="text"
                value={compemento}
                onChange={(e) => setCompemento(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Titulo B</Label>
              <Input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Contenido B</Label>
              <Tarearegistro1
                type="text"
                value={contenido_b}
                onChange={(e) => setContenido_b(e.target.value)}
              />
            </Divinput>
          </Divtext2>
        </Divtotal>
        <Botonagregar
          disabled={can > 0 && Object.keys(actual).length === 0}
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updatePrograma(
                {
                  id: actual.id,
                  nombre: nombre,
                  foto: foto,
                  contenido_a: contenido_a,
                  contenido_b: contenido_b,
                  titulo: titulo,
                  titulo_desc: titulo_desc,
                  compemento: compemento,
                },
                () => {
                  setActual({});
                  setNombre("");
                  setFoto("");
                  setContenido_a("");
                  setContenido_b("");
                  setTitulo("");
                  setTitulo_desc("");
                  setCompemento("");
                  getApi();
                }
              );
            } else {
              postPrograma(
                nombre,
                foto,
                contenido_a,
                contenido_b,
                titulo,
                titulo_desc,
                compemento,

                () => {
                  setNombre("");
                  setFoto("");
                  setContenido_a("");
                  setContenido_b("");
                  setTitulo("");
                  setTitulo_desc("");
                  setCompemento("");
                  getApi();
                }
              );
            }
          }}
        >
          {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
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
  height: 104px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
