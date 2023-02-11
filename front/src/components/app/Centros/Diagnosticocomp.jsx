import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Diagnosticocomp = () => {

  // traemos datos 
  const [centrosdiagnostico, setCentrosdiagnostico] = useState([]);

  async function mostrardiagnostico() {
    const response = await fetch("http://127.0.0.1:8000/api/centros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCentrosdiagnostico(respuesta);
  }

  useEffect(() => {
    mostrardiagnostico();
  }, []);





  return (

   
    
    <Diagnostico >
    {centrosdiagnostico.slice(0, 3).map((v,i) => (
    <Cars key={i }>
      <Img
        src={v.foto}
        alt="img"
      />
      <Descripcion>
        <Sede>{v.sede}</Sede>
        <Telefono>{v.telefono}</Telefono>
        <Direccion>{v.dirreccion}</Direccion>
        <Buton>Maps</Buton>
      </Descripcion>
    </Cars>
    ))};
  </Diagnostico>

  )
}

export default Diagnosticocomp


const Diagnostico = styled.div`

  width: 100%;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
const Cars = styled.div`
  background-color: transparent;
  width: 50vh;
  height: 40vh;
  position: relative;
  transition: all 2s;
  &:hover Img {
    margin-top: -15vh;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  transition: all 2s;
  border-radius: 20px;
  background-size: cover;
`;
const Descripcion = styled.div`
  position: absolute;
  background-color: #28274d;
  width: 50vh;
  height: 40vh;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
  border-radius: 20px;
  display: flex;
  padding: 2em;
  align-items: stretch;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  color:#fff;
  &:hover {
    margin-top: 10vh;
  }
`;
const Buton = styled.button`
display:block;
padding: 1em;
border:none;
cursor: pointer;
background-color:rgb(152, 33, 39);
color:#fff;
transition:background-color 1s,color 2s;
border-radius:5px;&:hover{
  background-color:#ffffff;
color:rgb(152, 33, 39);
}

`;
const Sede = styled.h2``;
const Telefono = styled.h3``;
const Direccion = styled.p``;
