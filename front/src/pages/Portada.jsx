import React from "react";
import {
  Containerdiv,
  Divinput,
  Input,
  Textarea,
  Inputfile,
} from "../style/crud";
import {
  Container,
  Form,
  Botonagregar,
  Tabla,
  Label,
  Divh1,
  Td,
  Botonesacciones,
  Img,
} from "../style/crud";
import {
  Divtitulo,
  Divcrudf,
  Divtabla,
  Divformulario,
  Tablahead,
  Tr,
  Th,
  Trbody,
  Imgeditar,
  Imgeliminar,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg"
import Eliminar from "../assets/crud/Eliminar.jpg"
import Registroportada from "../components/portada/Registroportada";
import useFech from "../hooks/useFech";
import { getportada } from "../services/portada";
const Portada = () => {
  //const {resJson:portada} = useFech(getportada);

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
                  <Th>Titulo</Th>
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                <Trbody className="row">
                  <Td>p</Td>
                  <Td>
                    <Img src="" alt="" />
                  </Td>
                  <Td>g</Td>
                  <Td>
                    <Botonesacciones><Imgeditar src={Editaricons} alt="" /></Botonesacciones>
                    <Botonesacciones><Imgeliminar src={Eliminar} alt="" /></Botonesacciones>{" "}
                  </Td>
                </Trbody>
              </tbody>
            </Tabla>
          </Divtabla>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Portada;
