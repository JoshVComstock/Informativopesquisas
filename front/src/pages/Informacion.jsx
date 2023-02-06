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
import Registroinformacion from '../components/informacion/Registroinformacion';

const Informacion = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Informacion</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroinformacion/>
          <Divtabla>
          <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Nombre</Th>
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
                <Trbody className="row">
                  <Td>asdasd</Td>
                  <Td>
                    <Img src="" alt="" />
                  </Td>
                  <Td>asdasda</Td>
                  <Td>mision</Td>
                  <Td><Img src="" alt="" /> </Td>
                  <Td>vision</Td>
                  <Td> <Img src="" alt="" /></Td>
    
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

export default Informacion