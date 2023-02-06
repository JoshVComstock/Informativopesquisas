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
import Registrocentros from '../components/centros/Registrocentros';

const Centros = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Centros</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocentros/>
          <Divtabla>
          <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Centro diagnostico </Th>
                  <Th>Sede</Th>
                  <Th>centro</Th>
                  <Th>Foto</Th>
                  <Th>Telefono</Th>
                  <Th>Direccion</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                <Trbody className="row">
                  <Td>asdasd</Td>
                  <Td>cocha</Td>
                  <Td>usapa</Td>
                  <Td>
                    <Img src="" alt="" />
                  </Td>
                  <Td>7985465</Td>
                  <Td>petro</Td>
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

export default Centros