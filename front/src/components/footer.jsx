import React from 'react'
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <Footerr>
    <Info>
      <Titulo> Sedes</Titulo>
      <Direcciones>direcciones calle loa</Direcciones>
      <Cel>75215686</Cel>
    </Info>
    <Info>
      <Titulo> Sedes</Titulo>
      <Direcciones>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        perspiciatis alias, magni modi voluptatibus non optio, assumenda
        odio, repellat natus dicta quae eveniet error sunt cumque tempora?
        Molestiae, iusto a.
      </Direcciones>
      <Cel>75215686</Cel>
    </Info>
    <Info>
      <Titulo> Sedes</Titulo>
      <Direcciones>direcciones calle loa</Direcciones>
      <Cel>75215686</Cel>
    </Info>
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
      <Ingreso>

      </Ingreso>
    </Formulario>
  </Footerr>
  )
}

export default Footer
const Footerr = styled.div`
  margin-top: 0 auto;
  padding: 3rem;
  width: 100%;
  height: 350px;
  max-height: 450px;
  background-color: #222f49;
  display: flex;

`;

const Navegacion = styled.div`
  width: calc(100% / 3);
  background-color: #222f49;
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
  flex-direction:column;
  justify-items:center;
  justify-content:center;
  border-radius:2em 0;
`;
const Links = styled(Link)`
  padding: 0.5em 100vh;
  color: #fff;
  text-decoration: none;
  display: block;
  transition: all 0.5s;

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

`;
const Titulo = styled.h2`
  font-size: 25px;
  border-bottom: solid 1.2px #a6445e;
  margin: 1em;
`;

const Direcciones = styled.h2`
  font-size: 20px;
  margin: 0 0 1em 1em;
  text-align: justify;
  width: 60%;
  overflow: hidden;

  max-width: 80%;
`;
const Cel = styled.h2`
  font-size: 20px;
  border-bottom: solid 1.2px;
  margin: 1em;
`;

const Ingreso = styled.input`
  font-size: 20px;
  border:none;
  margin: 1em;
  background-color:#3c425c;
  padding:0.5em;
  place-content:"escribenos";
  transition:all 1.5s;

&:focus{
  background-color:#a6445e;
  color:#fff;
  font-size: 15px;
}
`;