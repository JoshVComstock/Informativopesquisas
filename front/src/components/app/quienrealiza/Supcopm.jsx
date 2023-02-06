import React from 'react'
import styled, { keyframes } from "styled-components";
import {
    H3,
    Parrafotip,
    Titulodiv,
    Contenidodiv,
  } from "../iniciocomponents/Superior";
const Supcopm = () => {
  return (
    <Contenedor>
    <Imgreal src="http://127.0.0.1:8000/img/empresa/somos_.png" alt="" />
    <Contenidodiv>
      <H3>Biotech </H3>
      <Parrafotip> Preservando la vida desde su nacimiento</Parrafotip>
    </Contenidodiv>
  </Contenedor>
  )
}

export default Supcopm

const Imgreal = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 34% 100%, 48% 100%, 24% 50%);
`;
const Contenedor = styled.div`
  width: 100%;
  height: 80vh;
`;
