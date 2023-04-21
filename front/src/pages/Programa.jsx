import React, { useState } from "react";

import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
  Img,
} from "../style/crud";
import {
  Divtitulo,
  Divcrudf,
  Divtabla,
  Tr,
  Th,
  Trbody,
  Imgeditar,
  Imgeliminar,
  Divloading,
  Divload,
  Pcon,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroprogramas from "../components/programas/Registroprogramas";
import { UseFech } from "../hooks/useFech";
import { getPrograma } from "../services/programa";
import styled from "styled-components";
import { deletePrograma } from "../services/programa";
import { showImagen } from "../services/noimagen";
const Programa = () => {
  const { loading, getApi, res: programa } = UseFech(getPrograma);
  const [actual, setActual] = useState({});
  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Programa</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroprogramas
            getApi={getApi}
            actual={actual}
            setActual={setActual}
            can={programa.length}
          />
          <Divtabla1>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Foto</Th>
                  <Th>Titulo A</Th>
                  <Th>Contenido A</Th>
                  <Th>Titulo B</Th>
                  <Th>Contenido B</Th>
                  <Th>Titulo complemento</Th>
                  <Th>Complemento</Th>
                  <Th>Acciones</Th>
                  <Th></Th>
                </Tr>
              </thead>

              <tbody>
                {programa.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{showImagen(v.foto)}</Td>
                    <Td>{v.nombre}</Td>
                    <Td>
                      <Pcon>{v.contenido_a}</Pcon>
                    </Td>
                    <Td>{v.titulo}</Td>
                    <Td>
                      <Pcon>{v.contenido_b}</Pcon>
                    </Td>
                    <Td>{v.titulo_desc}</Td>
                    <Td>
                      <Pcon>{v.compemento}</Pcon>
                    </Td>
                    <Td>
                      <Botonesacciones
                        onClick={() => {
                          setActual(v);
                        }}
                      >
                        <Imgeditar src={Editaricons} alt="" />
                      </Botonesacciones>
                      <Botonesacciones
                        onClick={() => {
                          deletePrograma(v.id, getApi);
                        }}
                      >
                        <Imgeliminar src={Eliminar} alt="" />
                      </Botonesacciones>
                    </Td>
                  </Trbody>
                ))}
              </tbody>
            </Tabla>
          </Divtabla1>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Programa;

const Divtabla1 = styled.div`
  display: flex;
  width: 50%;
  margin-right: 20px;
  overflow-x: scroll;
  max-height: 40%;
`;
