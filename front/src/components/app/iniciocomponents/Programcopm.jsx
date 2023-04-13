
import styled , { keyframes } from "styled-components";

import React, { useState, useEffect } from "react";
import Loading from "../../loading";

const Programcopm = () => {

  const [ programainicio, setProgramainicio] = useState([]);

  const [loading, setLoading] = useState(true);

  async function mostrarprogramainicio() {
    const response = await fetch("http://127.0.0.1:8000/api/programa", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setProgramainicio(respuesta);

    setLoading(false);
    console.log(loading);
  }

  useEffect(() => {
    mostrarprogramainicio();
  }, []);

  return (
    <>
   {loading && <Loading />}
      {programainicio.map((v, i) => (
    <Divprogra key={i}>
        <Supdiv>
          <Titulo>{v.titulo_desc}</Titulo>
        </Supdiv>
        <Divimg>
          <Divprograma>
            <H2>Programa</H2>
            <Parrafo>
             {v.compemento}
            </Parrafo>
            <Abutton>leer mas</Abutton>
          </Divprograma>
          <Conteniendocard>
            <Img
              src={v.foto}
              alt="Imagen de la tarjeta"
            />
          </Conteniendocard>
        </Divimg>
      </Divprogra>
      ))}
    </>

  )
}

export default Programcopm
const animation = keyframes`
  0% {
    transform:translateX(25em);
    left:0;
   
  }
  50% {
    transform:rotate(180deg);
  }
  100% {
    transform:translateX(0);
    transform:rotate(360deg);
  }
`
const Divprogra = styled.div`
  width: 95%;
  margin:1em auto;
  display:flex;
  justify-content:center;
  flex-direction:column;
  position:relative;
  gap:1em;
  &::after{
    content:"";
    position:absolute;
    width:60%;
    height:80%;
    background-color:#B0D3C7;
    right:-5%;
    bottom:4%;
    z-index:-1;
    border-radius:5em  0 0 5em;
  }
`;
const Conteniendocard = styled.div`
margin:0;
padding:0;
`;
const H2 = styled.h2`
color:#405d89;
`;
const Abutton = styled.button`
width:30%;
margin:0.5em 0; 
padding:0.5em;
border:solid 1px #fff;
background-color:#405d89;
color:#fff;
transition:all 1.5s ;
cursor:pointer;
&:hover{
  background-color:#fff;
color:#405d89;
}
`;
const Img = styled.img`
  display: flex;
 width:400px;
 height:400px;
  background-size: cover;
border-radius:50%;
animation: ${animation} 2s ease-in-out;
  position:relative;
  top:0;
`;

const Divimg = styled.div`
  display: flex;
  flex-direction: row;
  width:90%;
  margin:0 auto;
  gap:2em;
`;
const Divprograma = styled.div`
padding:3em;
margin:3em 0 3em 3em;
  display: flex;
 width: 50%;
  flex-direction: column;
border-radius:0;
background-color:#C1D7DB;
`;
const Parrafo = styled.p`
  margin: 0.5em 0 0 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #7793bd;
  max-height:300px;
  overflow:hidden;
`;

const Supdiv = styled.div`
  width: 45%;
  text-align: justify;
`;
const Titulo = styled.h2`
  border-left: 10px solid #B0D3C7;
  font-size: 2em;
  letter-spacing: 1px;
  color: #7793bd;
  transition: all 1s;
  display:flex;
  align-items:flex-start;
  width:80%;
  margin: 0 auto;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #39725e;
  }
`;