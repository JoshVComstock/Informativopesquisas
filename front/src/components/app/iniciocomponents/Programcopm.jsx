
import styled from "styled-components";
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
const Divprogra = styled.div`
  background-color:rgb(223, 225, 235);
  /* ad1a8b61 */
  /* background-color: #babcc7; */
  width: 100%;
  padding:2em;
`;
const Conteniendocard = styled.div`
margin:0;
padding:0;

`;


const H2 = styled.h2`
color:#fff;

`;
const Img = styled.img`
  display: flex;
  max-width:650px;
  min-width:500px;
  min-height:400px;
  max-height:300px;
  background-size: cover;
border-radius:3em;
`;

const Divimg = styled.div`
  display: flex;
  flex-direction: row;
`;
const Divprograma = styled.div`
padding:3em;
margin:3em 0 3em 3em;
  display: flex;
  max-width: 600px;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
border-radius:3em 0 0 3em;
background-color:#0b3079e6;
`;
const Parrafo = styled.p`
  margin: 0 0 0 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #e7e7e7;
  max-height:300px;
  overflow:hidden;
`;

const Supdiv = styled.div`
  width: 45%;
  text-align: justify;
`;
const Titulo = styled.h2`
  border-top: 7em;
  border-left: 10px solid #19193b;
  font-size: 40px;
  text-align:left;
  letter-spacing: 2px;
  color: #0b3079e6;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #fff;
  }
`;