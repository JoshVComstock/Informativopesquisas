import React from 'react'
import styled from "styled-components";

const Superior = () => {
  return   ( <Titulodiv>
  <Imginicio
    src="https://images.pexels.com/photos/3875225/pexels-photo-3875225.jpeg?auto=compress&cs=tinysrgb&w=1260=1"
    alt=""
  />
  <Contenidodiv>
    <H3>Cuida el Futuro de tu BEBE</H3>
    <Parrafotip>INFORMATE CON NUESTRAS CAPSULAS INFORMATIVAS</Parrafotip>
    <Butontitulo> MÁS INFORMACION</Butontitulo>
  </Contenidodiv>
</Titulodiv>
  )

}

export default Superior

export const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;

  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0) ;
  
`;
export const Parrafotip = styled.p`
  width: 30%;
  color:#fff;
  height:40px;
  text-align:left;
  margin-left:2em;
  
`;
export const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color:#222f49;
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
  margin:3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #A6445E;
    color:#fff
  }
`;
export const H3 = styled.h2`
margin-top:4em;
max-width:30%;
min-width:20%;
font-family: 'Poppins', sans-serif;
  color: #e0e0e0;
  font-size: 2em;
  display: flex;
  padding: 10px;
  text-align:left;
  border-left: 10px solid #ffffff;
`;