import React, { useEffect, useState } from "react";
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
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroportada from "../components/portada/Registroportada";
import { getPortada } from "../services/portada";
import { UseFech } from "../hooks/useFech";
import { deletePortada } from "../services/portada";
import { showImagen } from "../services/noimagen";
const Portada = () => {
  const { loading, getApi, res: portada } = UseFech(getPortada);
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
          <h1>Portada</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroportada
            getApi={getApi}
            actual={actual}
            setActual={setActual}
            can={portada.length}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Titulo</Th>
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                {portada.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{1 + i}</Td>

                    <Tddescripcion>{v.titulo}</Tddescripcion>
                    <Td>
                      {showImagen(v.foto)}
                    </Td>
                    <Tddescripcion>{v.descripcion}</Tddescripcion>
                    <Td>
                      <Botonesacciones onClick={() => setActual(v)}>
                        <Imgeditar src={Editaricons} alt="" />
                      </Botonesacciones>
                      <Botonesacciones
                        onClick={() => deletePortada(v.id, getApi)}
                      >
                        <Imgeliminar src={Eliminar} alt="" />
                      </Botonesacciones>
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

export default Portada;
