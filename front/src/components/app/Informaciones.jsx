import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Headercomp from "./informacioncomponents/Headercomp";
import Footer from "../footer";

import MostrarInfo from "../MostrarInfo";
const Informaciones = () => {
  // traemos datos
  const [capsula, setCapsula] = useState([]);
  const [enviar, setEnviar]=useState({});

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
        <Pad>
      <Headercomp />
      <Contenidos>
        <Divpadrecap>
          {capsula.map((v, i) => (
            <Divcapsula key={i}>
              <Img src={v.foto} alt="" />
              <Titulocapsula>{v.titulo}</Titulocapsula>
              <Abutton  onClick ={() => {
                setEnviar(v) ;
              }}>Ver más</Abutton>
            </Divcapsula>
          ))}
        
        </Divpadrecap>
        <MostrarInfo enviard={enviar}/>
      </Contenidos>
  
      <Footer></Footer>
      </Pad>
    </>
  );
};

export default Informaciones;

const Contenidos = styled.section`
  width: 100%;
  height: 100%;
  margin:1em 0;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;
// buscador
export const Pad = styled.div`
  background-color:#F6F6F6;
`;
export const Divsearchpadre = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
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
  color:#fff;
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
  background: #9d17a19c;
  &:hover {
    background: #fff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
const Img = styled.img`
width:100%;
height:100%;
position:relative;
`;
const Divpadrecap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  justify-content:center;
  align-items:center;
  width:50%;
  height:100vh;
  overflow-y:scroll;
  &::after{
    position: absolute;
    content: "";
    background-color: #F7C9B5;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    z-index: -1;
    left: -10%;
  }
`;
const Divcapsula = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  overflow:hidden;
  color:#fff;
  flex-direction: column;
  text-align: justify;
  background-color: #5f71a7;
  list-style: none;
  align-items :center;
  position:relative;
  justify-content: flex-start;
  box-shadow:0px 2px 5px #0000006a;
  filter:grayscale(0%) contrast(1.1);
  transition:all 0.5s ease-out;
  &:hover{
    transform:scale(1.02);
  }
`;
export const Abutton = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 0.5em 1.5em;
  color: #fff;
  text-decoration: none;
  width: 40%;
  border-radius:1em  1em 0 0;
  background-color: #333f7291;
border:none;
box-shadow:0px 1px 5px #0005;
  cursor: pointer;
position:absolute;
bottom:0;
left:25%;
`;

const Titulocapsula = styled.h3`
font-size:1.3em;
font-weight:100;
text-align: center;
height:auto;
width:100%;
position:absolute;
bottom:20%;
background-color:#a6a9b291;
padding:0.2em 0;
`;