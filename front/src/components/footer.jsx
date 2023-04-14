import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet } from "react-router-dom";
import face from "../assets/redes/facebook.png";
import twi from "../assets/redes/gorjeo.png";
import insta from "../assets/redes/instagram.png";

const Footer = () => {
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
    <>
      <Footerr>
       <Divredes>
       <img src={face}  />
       <img src={twi} />
       <img src={insta} />
       </Divredes>
       <Diva>

       {centrosdiagnostico.slice(0, 3).map((v, i) => (
          <Info key={i}>
            <Titulo> {v.sede}</Titulo>
            <Direcciones>{v.dirreccion}</Direcciones>
            <Cel>{v.telefono}</Cel>
          </Info>
        ))}
        <Navegacion>
          <li>
            <Links to="/">Inicio</Links>
          </li>
          <li>
            <Links to="/programas">Programas</Links>
          </li>
          <li>
            <Links to="/informaciones">Informaciones</Links>
          </li>
          <li>
            <Links to="/centross">Centros</Links>
          </li>
          <li>
            <Links to="/quienlorealiza">Nosotros</Links>
          </li>
          <li>
            <Links to="/colaboraciones">Colaboracion</Links>
          </li>
          <li>
            <Links to="/contactanos">Contactanos</Links>
          </li>
        </Navegacion>
        <Formulario>
          <Titulo>Contactate con nosotros</Titulo>
          <Direcciones> info@biotech.com.bo</Direcciones>
          <Ingreso></Ingreso>
        </Formulario>
       </Diva>
      </Footerr>
    </>
  );
};

export default Footer;
const animation = keyframes`
 0% {left: -10% ;
 }
  50% {left: 50%;
    width: 100px;
    height:100px;
    background-color:#97a6c94b;
   }
  100% {left: -10%;
   }
`;


const Divredes= styled.div`
width:100%;
height:10vh;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
position: relative;
gap:1em;
&::before{
  position:absolute;
  content:"";
  width:100%;
  height:2px;
  background-color:#ffffff87;
  z-index:1;
}
& img{
  z-index:2;
  width:35px;
  height:35px;
  background-color:#0b2559;
}
`;
const Diva = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  width:100%;
`;
const Footerr = styled.div`
  margin-top: 0 auto;
  width: 100%;
  height: 400px;
  max-height: 450px;
  background-color: #0b2559;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  &::after {
    position: absolute;
    content: "";
    background-color: #14154d;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    z-index: -1;
    left: -10%;
    animation: ${animation} 10s linear infinite;
  }

  @media (max-width: 520px) {
    & section{
      display :none;
    }
    & article{
      width:100%;
    }
  }




`;

const Navegacion = styled.div`
  width: calc(100% / 3);
  background-color: #143068a6;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;
  justify-content: center;
  @media (max-width: 520px) {
      display :none;
  }
  @media (max-width: 980px) {
      display :none;
  }
`;
const Formulario = styled.section`
  width: calc(100% / 3);
  height:100%;
  background-color: #B0D3C7;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  border-radius: 0;
  margin-left: 2em;
`;
const Links = styled(Link)`
  padding: 0.5em 100vh;
  color: #fff;
  text-decoration: none;
  display: block;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffffea;
    color: #3c425c;
  }
  @media (max-width: 520px) {
      display :none;
  }
  @media (max-width: 980px) {
      display :none;
  }
`;
const Info = styled.article`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #ffffff;
  padding: 0 0 0 3em;
  height: 80%;
  @media (max-width: 520px) {
      width:100%;
      padding: 0;
      height:auto;
  }
`;
const Titulo = styled.h2`
  font-size: 0.9em;
  border-bottom: solid 2px #ffffff33;
  margin: 0.5em 0;
  padding-left: 25%;
  font-weight:100;
width:100%;
&::first-line{
  font-size: 1.5em;
  font-weight:100;
}
`;

const Direcciones = styled.h2`
  font-size: 0.9em;
  margin: 0 0 1em 1em;
  font-weight:100;
  text-align: justify;
  width: 100%;
  overflow: hidden;
  max-width: 80%;
`;
const Cel = styled.h2`
  font-size:0.9em;

  margin: 1em;
`;

const Ingreso = styled.input`
  font-size: 20px;
  border: none;
  margin: 1em;
  background-color: #3c425c;
  padding: 0.5em;
  place-content: "escribenos";
  transition: all 1.5s;
color:#fff;
  &:focus {
    background-color: #ffffff;
    color: #000000;
    font-size: 15px;
  }
  @media (max-width: 520px) {
      display :none;
  }
`;
