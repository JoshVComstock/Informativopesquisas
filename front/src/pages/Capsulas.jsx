import React from "react";
import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
  Img,
  Divtitulo,
  Divcrudf,
  Divtabla,
  Tr,
  Th,
  Trbody,
  Imgeditar,
  Imgeliminar,
  Tddescripcion,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registrocapsulas from "../components/capsulas/Registrocapsulas";
import { useState, useEffect } from "react";
const Capsulas = () => {
  const [capsulas, setCapsulas] = useState([]);
  const getcapsulas = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/capsula`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const respuesta = await response?.json();
    setCapsulas(respuesta);
  };
  useEffect(() => {
    getcapsulas();
  }, []);
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Capsulas informativas</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocapsulas />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Titulo</Th>
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Mas detalles</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              {capsulas.map((v, i) => (
                <Trbody className="row" key={i}>
                  <Td>{1 + i}</Td>
                  <Td>{v.titulo}</Td>
                  <Td>
                    <Img src={v.foto} alt="" />
                  </Td>
                  <Tddescripcion>{v.descripcion}</Tddescripcion>
                  <Tddescripcion>{v.mas_detalles}</Tddescripcion>
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

export default Capsulas;
