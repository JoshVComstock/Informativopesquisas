import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet } from "react-router-dom";
const Footer = () => {
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
          <a href="#">Facebock</a>
          <a href="#">intagram</a>
          <a href="#">Twiter</a>
          <a href="#">linkedink</a>
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
            <Ingreso placeholder="Escribenos" />
            <Divboton>
              <Buton type="submit" value="Enviar" />
            </Divboton>
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

const Divredes = styled.div`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1em;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #ffffff87;
    z-index: 1;
  }
  & > a {
    background-color: #fff;
    z-index: 2;
    color: #39725e;
    text-decoration: none;
    padding: 5px;
    border-radius: 10px;
    &:hover {
      color: #065c3e;
    }
  }
`;
const Diva = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
const Footerr = styled.div`
  margin-top: 0 auto;
  width: 100%;
  height: 400px;
  max-height: 450px;
  background-color: #0b2559f1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  height: 100%;
  background-color: #b0d3c785;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 2em;
`;
const Links = styled(Link)`
  padding: 0.4em 5vh;
  color: #fff;
  text-decoration: none;
  display: block;
  transition: 0.5s;

  &:hover {
    border-bottom: 0.5px solid #fff;
    transition: 0.5s;
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
  font-size: 0.9em;
  border-bottom: solid 3px #ffffff33;
  margin: 0.5em 0;
  padding-left: 25%;
  font-weight: 100;
  width: 100%;
  &::first-line {
    font-size: 1.5em;
    font-weight: 100;
  }
`;

const Direcciones = styled.h2`
  font-size: 0.9em;
  margin: 0 0 1em 1em;
  font-weight: 100;
  text-align: justify;
  width: 100%;
  overflow: hidden;
  max-width: 80%;
`;
const Cel = styled.h2`
  font-size: 0.9em;

  margin: 1em;
`;

const Ingreso = styled.input`
  font-size: 15px;
  border: none;
  margin: 1em;
  border-radius: 4px;
  padding: 5px;
  transition: 1.5s;
  color: #fff;
  border-bottom: 1px solid #fff;
  &:focus {
    background-color: #ffffff;
    color: #000000;
    outline: none;
  }
`;
const Buton = styled.input`
  width: 100px;
  outline: none;
  border-radius: 5px;
  border: none;
  &:hover{
    background:#0e4f7ad3;
    color:#fff;
  }
`;
const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
