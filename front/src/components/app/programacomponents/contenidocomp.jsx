import React from 'react'
import styled from "styled-components";
const Contenidocomp = () => {
  return (
    <Divprogra>
        <Content>
          <Contendidouno>
            <Titulocn>Prevención de una vida</Titulocn>
            <Parrafocn>La existencia de programas de tamizaje neonatal de hipotiroidismo permite no solo diagnosticar la patología, lo que es más importante aún, obliga a un tratamiento de reemplazo precoz dadas las graves consecuencias individuales y sociales de niños hipotiroideos no tratados oportunamente</Parrafocn>
          </Contendidouno>
          <Contendidodos>
            <Titulocn>tratamientos Preventivos</Titulocn>
            <Parrafocn>El Ministerio de Salud de Bolivia, mediante la Resolución Ministerial Nro. 0381, emitida el 21 de junio del 2006 declara obligatoria la realización de la detección del hipotiroidismo congénito a través del tamizaje neonatal en todos los recién nacidos. En abril del 2008, se inicia el programa de detección de hipotiroidismo congénito por tamizaje neonatal,</Parrafocn>
          </Contendidodos>
        </Content>
       
      </Divprogra>
  )
}

export default Contenidocomp


const Divprogra = styled.div`
  width: 100%;
  height: 47vh;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  max-width: 1350px;
  height: 45vh;
  max-height: 400px;
  z-index: 2;
  display: flex;
`;
const Contendidouno = styled.div`
  width: calc(100% / 2);
  height: 100%;
  background-color: #ad1a8b61;
  display:flex;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  justify-content:space-evenly;
  transition:all 2s ;
  &:hover{
    transform: scale(1.05);
  }
`;
const Contendidodos = styled.div`
  width: calc(100% / 2);
  background-color: #241c4689;
  height: 100%;
  display:flex;
  text-align:center;
  flex-direction:column;
  justify-content:space-evenly;
  transition:all 2s ;
  &:hover{
    transform: scale(1.05); }
`;

const Parrafocn = styled.p`
text-align: justify;
padding: 0 3em ;

`;
const Titulocn = styled.h2`
color:#fff;
font-size:30px;


`;
