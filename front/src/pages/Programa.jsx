import React, { useState } from "react";
import  useEffect  from "react";
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
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroprogramas from "../components/programas/Registroprogramas";
const Programa = () => {
  
  
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Programa</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroprogramas />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Foto</Th>
                  <Th>Contenido A</Th>
                  <Th>Contenido B</Th>
                  <Th>Titulo descripcion</Th>
                  <Th>Complemento</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                <Trbody className="row">
                  <Td>Biotech</Td>
                  <Td>
                    <Img src="" alt="" />
                  </Td>
                  <Td>asdasdasd</Td>
                  <Td>asdadasd</Td>
                  <Td>dolores as</Td>
                  <Td>asdasdas</Td>
                  <Td>
                    <Botonesacciones>
                      <Imgeditar src={Editaricons} alt="" />
                    </Botonesacciones>
                    <Botonesacciones>
                      <Imgeliminar src={Eliminar} alt="" />
                    </Botonesacciones>{" "}
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

export default Programa;
