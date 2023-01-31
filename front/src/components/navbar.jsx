import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Navbarnav>
      <Nav>
        <Navlink>
          <Linkes to="portada">Portada</Linkes>
          <Linkes to="capsulas">Capsulas</Linkes>
          <Linkes to="centros">Centros</Linkes>
          <Linkes to="detallecentro">Detalle centro</Linkes>
          <Linkes to="informacion">Informacion</Linkes>
          <Linkes to="programa">Programa</Linkes>
          <Linkes to="redcentro">Red centros</Linkes>
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
  
`;
const Datos = styled.div`
  width: calc(100% - 200px);
`;
const Nav = styled.div`
  width: 200px;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navlink = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
`;
const Linkes = styled(Link)`
  margin: 10px 10px 0px 0px;
  padding: 15px;
  border-bottom: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
