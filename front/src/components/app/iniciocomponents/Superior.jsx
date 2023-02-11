import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Superior = () => {
  const [superior, setSuperior] = useState([]);

  async function mostrarsuperior() {
    const response = await fetch("http://127.0.0.1:8000/api/principales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setSuperior(respuesta);
  }

  useEffect(() => {
    mostrarsuperior();
  }, []);

  return (
    <>
      {superior.map((v,i) => (
        <Titulodiv key={i}>
        
        <Imginicio 
        src={v.foto}
        />
      <Contenidodiv>
        <H3>{v.titulo}</H3>
        <Parrafotip>{v.descripcion}</Parrafotip>
        <Butontitulo> MÁS INFORMACION</Butontitulo>
      </Contenidodiv>
      </Titulodiv>
      ))}
      
    </>
 
  );
};

export default Superior;

export const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  box-shadow:  -12px -12px 24px #151616;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
 

  &::after{
  content:"";
  position:relative;
  width:100%;
  height:80vh;
  background-color:#2014525f;

}
`;
export const Parrafotip = styled.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
`;
export const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #092255e6;
`;
export const Titulodiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
`;
export const Butontitulo = styled.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #2bb0b4;
    color: #000000;
  }
`;
export const H3 = styled.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`;
