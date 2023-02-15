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
import Registrocentros from "../components/centros/Registrocentros";
import { useState,useEffect } from "react";
const Centros = () => {
  const [centros, setCentros] = useState([]);
  const getcentros = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/centros`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const respuesta = await response?.json();
    setCentros(respuesta);
  };
  useEffect(() => {
    getcentros();
  }, []);
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Centros</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocentros />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Centro diagnostico </Th>
                  <Th>Sede</Th>
                  <Th>centro</Th>
                  <Th>Foto</Th>
                  <Th>Telefono</Th>
                  <Th>Direccion</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              {centros.map((v, i) => (
                <Trbody className="row" key={i}>
                  <Td>{1+i}</Td>
                  <Td>{v.centro_diagnostico}</Td>
                  <Td>{v.sede}</Td>
                  <Td>{v.centro}</Td>
                  <Td>
                    <Img src={v.foto} alt="" />
                  </Td>
                  <Td>{v.telefono}</Td>
                  <Td>{v.dirreccion}</Td>
                  <Td>
                    <Botonesacciones>
                      <Imgeditar src={Editaricons} alt="" />
                    </Botonesacciones>
                    <Botonesacciones>
                      <Imgeliminar src={Eliminar} alt="" />
                    </Botonesacciones>{" "}
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

export default Centros;
