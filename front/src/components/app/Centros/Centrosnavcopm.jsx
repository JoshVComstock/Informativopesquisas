import React from 'react'
import styled from "styled-components";
import {
    H3,
    Contenidodiv,
    Imginicio
  } from "../iniciocomponents/Superior";

const Centrosnavcopm = () => {
  return (
    <Titulodiv>
    <Imginicio
      src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
    <Contenidodiv>
      <H3>Centros donde se realiza el tamizaje</H3>
    </Contenidodiv>
  </Titulodiv>
  )
}

export default Centrosnavcopm

export const Titulodiv = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;
