import React from 'react'
import styled from "styled-components";
const Capsulascopm = () => {
  return (
    <Divcapsulas>
    <Titulo>Informate con nuestras capsulas</Titulo>
    <Divpadrecap>
      <Divcapsula>
        <Titulocapsula>Informate con nuestras capsulas</Titulocapsula>
        <Parrafocapsula>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Inventore officiis quidem et minus in laborum illo magnam aliquam
          porro, culpa animi, consequuntur vero tempore nam id provident,
          nemo sequi dicta?us in laborum illo magnam aliquam porro, culpa
          animi, consequuntur vero tempore nam id provident, nemo sequi
          dicta?
        </Parrafocapsula>
        <Btncapsula>Ver mas</Btncapsula>
      </Divcapsula>
      <Divcapsula>
        <Titulocapsula>titulo_tarjeta</Titulocapsula>
        <Parrafocapsula>contenido</Parrafocapsula>
        <Btncapsula>Ver mas</Btncapsula>
      </Divcapsula>{" "}
      <Divcapsula>
        <Titulocapsula>titulo_tarjeta</Titulocapsula>
        <Parrafocapsula>contenido</Parrafocapsula>
        <Btncapsula>Ver mas</Btncapsula>
      </Divcapsula>
      <Divcapsula>
        <Titulocapsula>titulo_tarjeta</Titulocapsula>
        <Parrafocapsula>contenido</Parrafocapsula>
        <Btncapsula>Ver mas</Btncapsula>
      </Divcapsula>
      <Divcapsula>
        <Titulocapsula>titulo_tarjeta</Titulocapsula>
        <Parrafocapsula>contenido</Parrafocapsula>
        <Btncapsula>Ver mas</Btncapsula>
      </Divcapsula>
    </Divpadrecap>
  </Divcapsulas>
  )
}

export default Capsulascopm
const Titulo = styled.h2`
  border-top: 7em;
  border-left: 10px solid #222f49;
  font-size: 3em;
  letter-spacing: 2px;
  color: #222f49;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #a6445e;
  }
`;
const Divcapsulas = styled.div`
  margin-top: 0 auto;
  padding: 3rem;
  width: 100%;
  height: 590px;
  max-height:650px;
`;
const Divpadrecap = styled.div`
  margin-top: 2rem;
  padding: 10px;
  display: flex;
  gap: 2em;
  width: 100%;
  height: 450px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden; //
`;
const Divcapsula = styled.div`
  width: calc(100 / 3);
  height: 420px;
  background-color: #bfccccca;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

const Titulocapsula = styled.h2`
  margin-top: 1em;
  width: 200px;
  text-align: start;
  line-height: 1.2;
`;
const Parrafocapsula = styled.p`
  width: 300px;
  height: 200px;
  overflow: hidden;
  padding: 10px 40px;
  text-align: justify;
  line-height: 1.2;
`;
const Btncapsula = styled.button`
  padding: 10px 45px;
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color:#222f49;
  transition:all 2s;
  color :#fff;&:hover{
  background-color:#ffffff;
  color :#222f49;
  padding: 8px 60px;
  border :solid;
  border-left: 1px;
  border-right:1px;
  }

`;