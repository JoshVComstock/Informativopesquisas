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
    const response = await fetch("https://informativolaravel-production.up.railway.app/api/capsula", {
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
        <Encerar>
        <Divpadrecap>
          {capsula.map((v, i) => (
            <Divcapsula key={i}>
              <Img src={v.foto} alt="" />
              <Titulocapsula>{v.titulo}</Titulocapsula>
              <Abutton  onClick ={() => {
                setEnviar(v) ;
              }}>Leer</Abutton>
            </Divcapsula>
          ))}
        
        </Divpadrecap>
        </Encerar>
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
  overflow:hidden;

  @media (max-width: 520px) {
    flex-direction:column;
  
}
`;
// buscador
export const Pad = styled.div`
  background-color:#fff;
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
  width:100%;
  height:120vh;
  overflow-y:scroll;
  @media (max-width: 520px) {
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
height:100%;
}
  
`;

const Encerar = styled.section`
width:100%;
@media (max-width: 520px) {
width:auto;

  overflow-x:scroll;
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
  list-style: none;
  align-items :center;
  position:relative;
  justify-content: flex-start;
  box-shadow:0px 2px 5px #0000006a;
  &::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000;
  }
  &::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #003cff9b;
    border-radius:50%;
    top:-50%;
    left:-50%;
    display:none;
  }
  transition:all 0.5s ease-out;
  &:hover{
    &::after{
      display:flex;
  transition:all 0.5s ease-out;
      
    }
    &::before{
      opacity: 0.5;
      z-index:2;
  }
    transform:scale(1.02);
   & button{
    z-index:3;
    background-color:#003cff9b;
    color:#ffffff;
    font-size:1.2em;
    bottom:-10%;
right:-10%;
   }
    & h3 {
    z-index:3;
      display:flex;
    }
  }
  @media (max-width: 520px) {
    width: 300px;
  height: 300px;
  margin:0 0 0 2em ;
}



`;
export const Abutton = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 4em 2em;
  color: #fff;
  text-decoration: none;
  width: 60%;
  border-radius:90%  0em 0 0;
  background-color: #333f7291;
border:none;
box-shadow:0px 1px 5px #0005;
  cursor: pointer;
position:absolute;
bottom:-10%;
right:-10%;

`;

const Titulocapsula = styled.h3`
display:none;
font-size:1.3em;
font-weight:100;
text-align: center;
height:auto;
width:100%;
height:100%;
position:absolute;
justify-content:center;
align-items:center;
padding:0.2em 0;
`;