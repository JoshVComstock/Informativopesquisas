import React from "react";
import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
  Img,
  Divtitulo,
  Divcrudf,
  Divtabla,
  Tr,
  Th,
  Trbody,
  Imgeditar,
  Imgeliminar,
  Tddescripcion,
  Divloading,
  Divload,
  Pcon,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registrocapsulas from "../components/capsulas/Registrocapsulas";
import { UseFech } from "../hooks/useFech";
import { getCapsulas } from "../services/capsulas";
import { deleteCapsulas } from "../services/capsulas";
import { useState } from "react";
import Noimagen from "../assets/crud/Noimagen1.jpg";
import { showImagen } from "../services/noimagen";
const Capsulas = () => {
  const { loading, getApi, res: capsula } = UseFech(getCapsulas);
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
          <h1>Capsulas informativas</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocapsulas
            getApi={getApi}
            actual={actual}
            setActual={setActual}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Titulo</Th>
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Mas detalles</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              <tbody>
                {capsula.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{1 + i}</Td>
                    <Td>{v.titulo}</Td>
                    <Td>{showImagen(v.foto)}</Td>
                    <Tddescripcion>
                      {" "}
                      <Pcon>{v.descripcion}</Pcon>
                    </Tddescripcion>
                    <Tddescripcion>
                      <Pcon>{v.mas_detalles}</Pcon>
                    </Tddescripcion>
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
                          deleteCapsulas(v.id, getApi);
                        }}
                      >
                        <Imgeliminar src={Eliminar} alt="" />
                      </Botonesacciones>{" "}
                    </Td>
                  </Trbody>
                ))}
              </tbody>
            </Tabla>
          </Divtabla>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Capsulas;
