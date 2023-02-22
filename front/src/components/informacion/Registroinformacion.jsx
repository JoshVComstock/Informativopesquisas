import React from "react";
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
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getBase64 } from "../../services/converter";
import { postInformacion, updateInformacion } from "../../services/informacion";
const Registroinformacion = ({ getApi, actual, setActual, cant }) => {
  const [titulo, setTitulo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mision, setMision] = useState("");
  const [fotomision, setFotomision] = useState("");
  const [vision, setVision] = useState("");
  const [fotovision, setFotovision] = useState("");
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setTitulo(actual.nombre);
      setFoto(actual.foto);
      setMision(actual.mision);
      setFotomision(actual.foto_m);
      setDescripcion(actual.descripcion);
      setVision(actual.vision);
      setFotovision(actual.foto_v);
    }
  }, [actual]);

  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divtotal>
          <Divinput1>
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
              <Inputfile
                type="file"
                onChange={(e) => {
                  getBase64(e.target.files[0], (resultado) => {
                    setFoto(resultado);
                  });
                }}
              />
              <Imgfile src={foto} alt="" />
            </Divinput>

            <Divinput>
              <Label htmlFor="">Mision</Label>
              <Input
                type="text"
                value={mision}
                onChange={(e) => setMision(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label>Foto mision</Label>
              <Inputfile
                type="file"
                onChange={(e) => {
                  getBase64(e.target.files[0], (resultado) => {
                    setFotomision(resultado);
                  });
                }}
              />
              <Imgfile src={fotomision} alt="" />
            </Divinput>
          </Divinput1>
          <Divinput2>
            <Divinput>
              <Label htmlFor="">Descripcion</Label>
              <Textarea5
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Vision</Label>
              <Input
                type="text"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label>Foto vision</Label>
              <Inputfile
                type="file"
                onChange={(e) => {
                  getBase64(e.target.files[0], (resultado) => {
                    setFotovision(resultado);
                  });
                }}
              />
              <Imgfile src={fotovision} alt="" />
            </Divinput>
          </Divinput2>
        </Divtotal>
        <Botonagregar
          disabled={cant > 1 && Object.keys(actual).length === 0}
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateInformacion(
                {
                  id: actual.id,
                  nombre: titulo,
                  foto: foto,
                  descripcion: descripcion,
                  mision: mision,
                  foto_m: fotomision,
                  vision: vision,
                  foto_v: fotovision,
                },
                () => {
                  setActual({});
                  setTitulo("");
                  setFoto("");
                  setMision("");
                  setFotomision("");
                  setDescripcion("");
                  setVision("");
                  setFotovision("");
                  getApi();
                }
              );
            } else {
              postInformacion(
                titulo,
                foto,
                mision,
                fotomision,
                descripcion,
                vision,
                fotovision,
                () => {
                  setTitulo("");
                  setFoto("");
                  setMision("");
                  setFotomision("");
                  setDescripcion("");
                  setVision("");
                  setFotovision("");
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

export default Registroinformacion;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
const Divtotal = styled.div`
  display: flex;
`;
const Divinput1 = styled.div`
  margin: 5px;
`;
const Divinput2 = styled.div`
  margin: 5px;
`;
const Textarea5 = styled.textarea`
  height: 186px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
