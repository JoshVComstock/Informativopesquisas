import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet } from "react-router-dom";
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
const Footerr = styled.div`
  margin-top: 0 auto;
  width: 100%;
  height: 250px;
  max-height: 450px;
  background-color: #0b41ace6;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const Formulario = styled.div`
  width: calc(100% / 3);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  border-radius: 2em 0 0 2em;
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
`;
const Info = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #ffffff;
  padding: 0 0 0 3em;
  height: 80%;
`;
const Titulo = styled.h2`
  font-size: 27px;
  border-left: solid 2px #ffffff;
  margin: 1em 0;
  padding-left: 1em;
`;

const Direcciones = styled.h2`
  font-size: 16px;
  margin: 0 0 1em 1em;
  text-align: justify;
  width: 60%;
  overflow: hidden;

  max-width: 80%;
`;
const Cel = styled.h2`
  font-size: 17px;

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

  &:focus {
    background-color: #a6445e;
    color: #fff;
    font-size: 15px;
  }
`;
