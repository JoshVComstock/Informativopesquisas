import React, { useEffect } from "react";
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
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroportada from "../components/portada/Registroportada";
import { getPortada } from "../services/portada";
import { UseFech } from "../hooks/useFech";
import { deletePortada } from "../services/portada";
const Portada = () => {
  const { getApi,res: portada } = UseFech(getPortada);
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Portada</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroportada />
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
              {portada.map((v, i) => (
                <Trbody className="row" key={i}>
                  <Td>{1 + i}</Td>
                  <Tddescripcion>{v.titulo}</Tddescripcion>
                  <Td>
                    <Img src={v.foto} alt="" />
                  </Td>
                  <Tddescripcion>{v.descripcion}</Tddescripcion>
                  <Td>
                    <Botonesacciones>
                      <Imgeditar src={Editaricons} alt="" />
                    </Botonesacciones>
                    <Botonesacciones onClick={()=>deletePortada(v.id)}>
                      <Imgeliminar src={Eliminar} alt="" />
                    </Botonesacciones>
                  </Td>
                </Trbody>
              ))}
            </Tabla>
          </Divtabla>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Portada;
