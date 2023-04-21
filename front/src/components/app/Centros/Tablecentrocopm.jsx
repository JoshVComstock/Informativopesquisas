import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Divload, Divloading } from "../../../style/crud";

const Tablecentrocopm = () => {
  const [tablacentros, setTablacentros] = useState([]);
  const [loading, setLoading] = useState(true);

  async function mostrartablacentros() {
    const response = await fetch(
      "https://informativolaravel-production.up.railway.app/api/detallecentros",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setTablacentros(respuesta);
  }

  useEffect(() => {
    mostrartablacentros();
  }, []);

  const [redescetros, setRedescetros] = useState([]);

  async function mostrarredescentro() {
    const response = await fetch(
      "https://informativolaravel-production.up.railway.app/api/red",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setRedescetros(respuesta);
    setLoading(false);
  }

  useEffect(() => {
    mostrarredescentro();
  }, []);

  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }
  return (
    <>
      {redescetros.map((v, i) => (
        <Div key={i}>
          <Titulo>{v.red}</Titulo>
          <Tablacentro>
            <Tabla>
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Direccion</Th>
                  <Th>Telefono</Th>
                  <Th>Horario de atencion</Th>
                  <Th>mapa</Th>
                </Tr>
              </Thead>
              {tablacentros
                .filter((cetro) => cetro.red.includes(v.red))
                .map((e, a) => (
                  <Tbody key={a}>
                    <Tb>
                      <Td>{e.nombre}</Td>
                      <Td>{e.direccion}</Td>
                      <Td>{e.telefono}</Td>
                      <Td>{e.horario_atencion}</Td>
                      <Td>
                        <A href={e.mapa}>Mapa</A>
                      </Td>
                    </Tb>
                  </Tbody>
                ))}
            </Tabla>
          </Tablacentro>
        </Div>
      ))}
    </>
  );
};

export default Tablecentrocopm;

const Titulo = styled.h2`
  font-size: 20px;
  border-left: 0.5em solid #0000006a;
  margin: 2em 0 0 2em;
`;
const Tb = styled.tr`
  background-color: #d7d8df;
  &:hover {
    background-color: #00000057;
    color: #fff;
  }
`;
const Div = styled.section`
  width: 100%;
`;
const A = styled.a`
  color: #0037ff66;
  text-decoration: none;
  padding: 0 10%;
  background-color: #fff;
  font-weight: bold;
  border-radius: 0.5em;
  @media (max-width: 520px) {
  }
  &:hover {
    color: #ffff;
    background-color: #0037ff66;
    font-weight: 100;
  }
`;
const Tablacentro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;
const Tabla = styled.table`
  width: 85%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  @media (max-width: 520px) {
    width: 100%;
    font-size: 0.8em;
    font-weight: 100;
  }
`;
const Thead = styled.thead`
  font-weight: 100;
`;
const Tr = styled.tr`
  background-color: #ffffff;
  color: #211e1e;
  text-align: left;
  font-weight: 100;
  box-shadow: 0px 2px 5px #0005;
`;
const Th = styled.th`
  padding: 12px 15px;
`;
const Tbody = styled.tbody`
  width: 100%;
  height: 3em;
`;
const Td = styled.td`
  border: 0.5px solid #ffffff54;
  height: 0em;
  padding: 0 1em;
  background-color: #0037ff66;
  color: #fff;
`;
