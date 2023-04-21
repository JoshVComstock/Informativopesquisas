import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
import {
    H3,
    Parrafotip,
    Titulodiv,
    Contenidodiv,
  } from "../iniciocomponents/Superior";
const Supcopm = () => {

  const [ realiza, setRealiza] = useState([]);

  const [loading, setLoading] = useState(true);

  async function mostrarrealiza() {
    const response = await fetch("https://informativolaravel-production.up.railway.app/api/informacion", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setRealiza(respuesta);

    setLoading(false);
    console.log(loading);
  }

  useEffect(() => {
    mostrarrealiza();
  }, []);

  return (
   <>
    {realiza.map((v, i) => ( 
    <Contenedor key={i}>
    <Imgreal src={v.foto} alt="" />
    <Contenidodiv>
      <H3>{v.nombre} </H3>
    </Contenidodiv>
 
  </Contenedor>
    ))}
   </>
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
  height: 80vh;  overflow:hidden;
`;
