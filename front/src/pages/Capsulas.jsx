import React from 'react'
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
import Registrocapsulas from '../components/capsulas/Registrocapsulas';

const Capsulas = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Capsulas informativas</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocapsulas/>
          <Divtabla>
          <Tabla className="table">
              <thead>
                <Tr>
                  <Th Th>Titulo</Th>
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Mas detalles</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                <Trbody className="row">
                  <Td>pasd</Td>
                  <Td>
                    <Img src="" alt="" />
                  </Td>
                  <Td>gas</Td>
                  <Td>asdasdasd</Td>
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
}

export default Capsulas