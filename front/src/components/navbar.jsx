import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Portadaicons from "../assets/navbar/Portada1.jpg";
import Capsulasicons from "../assets/navbar/Capsulas.jpg";
import Centroicons from "../assets/navbar/Centros1.jpg";
import Detallecentroicons from "../assets/navbar/Detallecentros.jpg";
import Informacionicons from "../assets/navbar/Informacion.jpg";
import Programaicons from "../assets/navbar/Programas.jpg";
import Redcentrosicons from "../assets/navbar/Redcentros.jpg";
const Navbar = () => {

  
  return (
    <Navbarnav>
      <Nav>
        <Navlink>
          <Logo>
            <h1>Panel Administrativo</h1>
          </Logo>
          <Linkes to="portada">
            <Imgicons src={Portadaicons} alt="" /> Portada
          </Linkes>
          <Linkes to="capsulas">
            <Imgicons src={Capsulasicons} alt="" />
            Capsulas
          </Linkes>
          <Linkes to="centros">
            <Imgicons src={Centroicons} alt="" />
            Centros
          </Linkes>
          <Linkes to="detallecentro">
            <Imgicons src={Detallecentroicons} alt="" />
            Detalle centro
          </Linkes>
          <Linkes to="informacion">
            <Imgicons src={Informacionicons} alt="" />
            Informacion
          </Linkes>
          <Linkes to="programa">
            <Imgicons src={Programaicons} alt="" />
            Programa
          </Linkes>
          <Linkes to="redcentro">
            <Imgicons src={Redcentrosicons} alt="" />
            Red centros
          </Linkes>
        </Navlink>
      </Nav>
      <Datos>
        <Outlet />
      </Datos>
    </Navbarnav>
  );
};

export default Navbar;
const Navbarnav = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  overflow: hidden;
`;
const Datos = styled.div`
  width: 100%;
  background: transparent;
  border-radius: 50px;
`;
const Nav = styled.div`
  width: 100%;
  height: 10vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow:0px 2px 8px #0005;
  position:fixed;
 
`;
const Navlink = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 100%;
  font-size: 17px;
  gap:0.5em;
  @media (max-width: 500px) {
    flex-direction:column;
    height:auto;
    background-color:#fff;
    position:absolute;
  }
`;
const Imgicons = styled.img`
  width: 30px;
  margin-right: 10px;

  filter: invert(31%) sepia(57%) saturate(759%) hue-rotate(214deg)
    brightness(103%) contrast(86%);
`;
const Linkes = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px 7px 0px 7px;
  padding: 15px;
  text-decoration: none;
  color: #232423;
  transition: 0.5s;
  border-bottom: solid 1px #fff5;
  gap:1em;
 
  &:hover {
transform:translateY(0.5em);

    background: #4155ea92;
    color: #fff;
    transition: 0.5s;
  }
  &:hover img {
    filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(131deg)
      brightness(101%) contrast(102%);
  }
`;
const Logo = styled.div`
  cursor: default;
  display: flex;
  background-color:#4a0c71;
  height:100%;
  width:100%;
  & h1 {
    margin-left:0.2em;
    color: #fff;
    font-size: 1em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    &::first-letter {
      font-size: 2em;
    }
  }
`;
