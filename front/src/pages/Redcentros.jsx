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
import Registroredcentros from '../components/redcentros/Registroredcentros';

const Redcentros = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Red centros</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroredcentros/>
          <Divtabla>
          <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Red</Th>
                  <Th>Detalle red</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                <Trbody className="row">
                  <Td>sana</Td>
                  <Td>
                    asdasdasf
                  </Td>
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

export default Redcentros