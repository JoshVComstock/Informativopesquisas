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
          <Logo><h1>Admin page</h1></Logo>
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
  flex-direction: row;
  background: #1f2421;
`;
const Datos = styled.div`
  width: calc(100% - 200px);
  background: #fff;
  border-radius: 50px;
`;
const Nav = styled.div`
  width: 200px;
  height: 100vh;
  background: #1f2421;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navlink = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  font-size: 17px;
`;
const Imgicons = styled.img`
  width: 30px;
  margin-right: 10px;
  filter: invert(58%) sepia(3%) saturate(4169%) hue-rotate(101deg)
    brightness(90%) contrast(122%);
`;
const Linkes = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px 7px 0px 7px;
  padding: 15px;
  text-decoration: none;
  color: #dce1de;
  transition: .5s;

  &:hover {
    border-radius: 15px 15px 15px 15px;
    background: #216869;
    color: #fff;
    transition: .5s;
    margin-left:5px ;

  }
  &:hover img {
    filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(131deg)
      brightness(101%) contrast(102%);
  }
`;
const Logo=styled.div`
font-size: 16px;
color: #fff;
border-radius: 30%;
border-bottom: 5px solid #216869;
margin: 0px 5px 5px 5px;
cursor:default;
display: flex;
justify-content: center
`;