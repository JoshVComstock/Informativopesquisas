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
import Registrodetallecentro from '../components/detallecentro/Registrodetallecentro';
const Detallecentro = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Detalle centro</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrodetallecentro/>
          <Divtabla>
          <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Direccion</Th>
                  <Th>Telefono</Th>
                  <Th>Horario atencion</Th>
                  <Th>Mapa</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                <Trbody className="row">
                  <Td>jesus</Td>
                  <Td>
                    av.petro
                  </Td>
                  <Td>123546</Td>
                  <Td>5 pm a 6pm </Td>
                  <Td>httpp</Td>
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

export default Detallecentro