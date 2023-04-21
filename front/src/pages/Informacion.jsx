import React, { useState } from "react";
import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
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
import Registroinformacion from "../components/informacion/Registroinformacion";
import { UseFech } from "../hooks/useFech";
import { deleteInformacion, getInformacion } from "../services/informacion";
import Noimagen from "../assets/crud/Noimagen1.jpg";
import { showImagen } from "../services/noimagen";
const Informacion = () => {
  const { loading, getApi, res } = UseFech(getInformacion);
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
          <h1>Informacion</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroinformacion
            getApi={getApi}
            actual={actual}
            setActual={setActual}
            cant={res.length}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Titulo</Th>
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Mision</Th>
                  <Th>Foto mision</Th>
                  <Th>Vision </Th>
                  <Th>Foto vision</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              <tbody>
                {res.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{v.nombre}</Td>
                    <Td>{showImagen(v.foto)}</Td>
                    <Td>
                      <Pcon>{v.descripcion}</Pcon>
                    </Td>
                    <Td>{v.mision}</Td>
                    <Td>{showImagen(v.foto_m)}</Td>
                    <Td>{v.vision}</Td>
                    <Td>{showImagen(v.foto_v)}</Td>
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
                          deleteInformacion(v.id, getApi);
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

export default Informacion;
