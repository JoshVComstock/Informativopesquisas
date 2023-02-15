import React from "react";
import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
  Divtitulo,
  Divcrudf,
  Divtabla,
  Tr,
  Th,
  Trbody,
  Imgeditar,
  Imgeliminar,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroredcentros from "../components/redcentros/Registroredcentros";
import { useState, useEffect } from "react";

const Redcentros = () => {
  const [red, setRed] = useState([]);
  const getred = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/red`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const respuesta = await response?.json();
    setRed(respuesta);
  };
  useEffect(() => {
    getred();
  }, []);
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Red centros</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroredcentros />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Red</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              {red.map((v, i) => (
                <Trbody className="row" key={i}>
                  <Td>{1+i}</Td>
                  <Td>{v.red}</Td>
                  
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

export default Redcentros;
