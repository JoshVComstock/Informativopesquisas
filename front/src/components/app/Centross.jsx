import React from "react";
import styled from "styled-components";
import Centrosnavcopm from "./Centros/Centrosnavcopm";
import Diagnosticocomp from "./Centros/Diagnosticocomp";
import Footer from "../footer";
const Centross = () => {
  return (
    <Content>
      <Centrosnavcopm />
      <Titulo>Centros de diagnostico</Titulo>
      <Diagnosticocomp />
      <Tablacentro>
        <Tabla className="table" >
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Direccion</Th>
              <Th>Telefono</Th>
              <Th>Horario de atencion</Th>
              <Th>mapa</Th>
            </Tr>
          </Thead>
          <Tbody>
            <tr>
              <td>El Pajonal</td>
              <td>
                Avenida La Barranca, barrio El Pajonal, al lado de la Fuerza
                Naval UV 46 entre 3er y 4to anillo
              </td>
              <td>3-582246</td> <td>12 hrs</td>
              <td>
                <a href="https://goo.gl/maps/ggErfixAii1wr7pGA">Mapa</a>
              </td>
            </tr>
          </Tbody>
          <tfoot>footer</tfoot>
        </Tabla>
        <Tabla></Tabla> <Tabla></Tabla>
      </Tablacentro>
      <Footer></Footer>
    </Content>
  );
};

export default Centross;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
const Titulo = styled.h2`
  margin: 1em 2em 1em 3em;
  font-size: 2em;
  border-left: 1em solid rgb(152, 33, 39);
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
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
`;
const Thead = styled.thead`
`;
const Tr=styled.tr`
background-color: blue;
color: #ffff;
  text-align: left;
`;
const Th=styled.th`
 padding: 12px 15px;
`;
const Tbody = styled.tbody`
  width: 100%;
  height: 30vh;
  
`;
