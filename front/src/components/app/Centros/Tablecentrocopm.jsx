import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Tablecentrocopm = () => {
  const [tablacentros, setTablacentros] = useState([]);

  async function mostrartablacentros() {
    const response = await fetch("http://127.0.0.1:8000/api/detallecentros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setTablacentros(respuesta);
  }

  useEffect(() => {
    mostrartablacentros();
  }, []);

    const [redescetros, setRedescetros] = useState([]);
  
    async function mostrarredescentro() {
      const response = await fetch("http://127.0.0.1:8000/api/red", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      const respuesta = await response?.json();
      setRedescetros(respuesta);
    }
  
    useEffect(() => {
      mostrarredescentro();
    }, []);


    
  return (
    <>
      {redescetros.map((v, i) => (
    <div >
    <Titulo>{v.red}</Titulo>
      <Tablacentro>
        <Tabla className="table">
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Direccion</Th>
              <Th>Telefono</Th>
              <Th>Horario de atencion</Th>
              <Th>mapa</Th>
            </Tr>
          </Thead>
          {tablacentros.map((v, i) => (
            <Tbody key={i}>
              <Tb>
                <Td>{v.nombre}</Td>
                <Td>{v.direccion}</Td>
                <Td>{v.telefono}</Td>
                <Td>{v.horario_atencion}</Td>
                <Td>
                  <A href={v.mapa}>Ver mapa</A>
                </Td>
              </Tb>
            </Tbody>
          ))}

          <Tfoot>
            <tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </tr>
          </Tfoot>
        </Tabla>
      </Tablacentro>
      </div>
       ))}
    </>
  );
};

export default Tablecentrocopm;

const Titulo = styled.h2`
font-size:20px;
border-left:1em solid;
margin-left:2em;
`;
const Tb = styled.tr`
 background-color:#d7d8df;
  &:hover{
    background-color:#2327367f;
    color:#fff;
    }
`;
const A = styled.a`
color:#968989;
&:hover{
  color:#ffff;
}
`;
const Tfoot = styled.tfoot`
  background-color: #1e3c4d;
  height:2em;
`;
const Tablacentro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
`;
const Tabla = styled.table`
  width: 85%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
`;
const Thead = styled.thead``;
const Tr = styled.tr`
  background-color: #1e3c4d;
  color: #ffff;
  text-align: left;

 
`; 
const Th = styled.th`
  padding: 12px 15px;
`;
const Tbody = styled.tbody`
  width: 100%;
  height: 3em;
`;
const Td = styled.td`
border:1px solid;
height:0em;
padding:0 1em ;
`