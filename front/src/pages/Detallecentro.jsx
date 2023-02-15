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
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import { getDetallecentro } from "../services/detallecentro";
import { UseFech } from "../hooks/useFech";
import Registrodetallecentro from "../components/detallecentro/Registrodetallecentro";
const Detallecentro = () => {
  const { res: detallecentro } = UseFech(getDetallecentro);
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Detalle centro</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrodetallecentro />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Direccion</Th>
                  <Th>Telefono</Th>
                  <Th>Horario atencion</Th>
                  <Th>Mapa</Th>
                  <Td>red centros</Td>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              {detallecentro.map((v, i) => (
                <Trbody className="row" key={i}>
                  <Td>{v.nombre}</Td>
                  <Td>{v.direccion}</Td>
                  <Td>{v.telefono}</Td>
                  <Td>{v.horario_atencion}</Td>
                  <Td>{v.mapa}</Td>
                  <Td>{v.red}</Td>
                  <Td>
                    <Botonesacciones>
                      <Imgeditar src={Editaricons} alt="" />
                    </Botonesacciones>
                    <Botonesacciones>
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

export default Detallecentro;
