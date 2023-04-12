import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Headercomp from "./informacioncomponents/Headercomp";
import Footer from "../footer";
import Navegacioncomp from "./informacioncomponents/Navegacioncomp";
import Contenidocomp from "./informacioncomponents/Contenidocomp";
import { Link, Outlet } from "react-router-dom";

const Informaciones = () => {
  // traemos datos
  const [capsula, setCapsula] = useState([]);

  async function mostrarcapsula() {
    const response = await fetch("http://127.0.0.1:8000/api/capsula", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCapsula(respuesta);
  }

  useEffect(() => {
    mostrarcapsula();
  }, []);

  return (
    <>
      <Headercomp />
      <Divsearchpadre>
        <Divsearch>
          <Search type="text" placeholder="Buscar" />
          <Botonsearch>
            <img src="" alt="" />{" "}
          </Botonsearch>
        </Divsearch>
      </Divsearchpadre>
      <Contenidos>
        <Divpadrecap>
          {capsula.map((v, i) => (
            <Divcapsula key={i}>
              <Titulocapsula>{v.titulo}</Titulocapsula>
              <Img src={v.foto} alt="" />
              <Parrafocapsula>{v.descripcion}</Parrafocapsula>
              <li>
              <Links to={`/capsula/${v.id}`}>Ver más</Links>

              </li>
            </Divcapsula>
          ))}
        </Divpadrecap>
      </Contenidos>
      <Footer></Footer>
    </>
  );
};

export default Informaciones;

const Contenidos = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4em;
`;
// buscador
export const Divsearchpadre = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 3em 2em 0px 0px;
`;
export const Divsearch = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  border-radius: 60px;
  
  padding: 10px 20px;
  height: 40px;
  margin: 10px;
`;
export const Search = styled.input`
 
  background: transparent;
  flex: 1;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  color: #000;
  &:focus {
    border-bottom: 1px solid #0066ff;
  }
`;
export const Botonsearch = styled.button`
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 29px;
  cursor: pointer;
  background: #0066ff;
  &:hover {
    background: #f700ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;

// capsulas


const Img = styled.img`
width:100%;
height:60%;

position:relative;
`;
const animation = keyframes`
 /* 0% {left: -10% ;
 }
  50% {left: 50%;
    width: 100px;
    height:100px;
    background-color:#97a6c94b;
   }
  100% {left: -10%;
   } */
`;
const Divpadrecap = styled.div`
  /* background-color:#501a1a; */
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  justify-content:center;
  align-items:center;
 
  &::after{
    position: absolute;
    content: "";
    background-color: #2b44d1;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    z-index: -1;
    left: -10%;
  }
`;
const Divcapsula = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  border-radius:1em;
  overflow:hidden;
  color:#fff;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  text-align: justify;
  background-color: #105dd1b3;
  list-style: none;
  justify-content: space-around;
`;
export const Links = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 0.8em;
  color: #fff;
  text-decoration: none;
  width: 100%;
  background-color: #333f72;
  border-radius:0.4em;
`;

const Titulocapsula = styled.h2``;
const Parrafocapsula = styled.p``; 
const Btncapsula = styled.button``;
