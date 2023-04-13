import React, { useState, useEffect } from "react";
import { Link , Outlet } from "react-router-dom";
import styled from "styled-components";
const Capsulascopm = () => {
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
    <Divcapsulas>
      <Titulo>Informate con nuestras capsulas</Titulo>
      <>
    
        <Divpadrecap >
        {capsula.slice(0, 4) .map((v,i) => (
            <Divcapsula key={i} >
              <Titulocapsula>{v.titulo}</Titulocapsula>
              <Parrafocapsula src={v.foto}></Parrafocapsula>
              <li><Links to="/informaciones">Ver más</Links></li>
             
            </Divcapsula>

            ))}
        </Divpadrecap>
      
      </>
    </Divcapsulas>
  );
};

export default Capsulascopm;

export const Links = styled (Link)`
 padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  border: solid 1px #fff;
  border-radius:3px;
  background-color: #7793bd;
  transition: all 1.5s;
  color: #e8ebf2;
  &:hover {
    background-color: #dbdce75e;
    color: #222f49;
    padding: 10px 60px;
  }
`

const Titulo = styled.h2`
   border-left: 10px solid #B0D3C7;
  font-size: 2em;
  letter-spacing: 1px;
  color: #7793bd;
  transition: all 1s;
  display:flex;
  align-items:flex-start;
  width:85%;
  margin: 2em auto;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #39725e;
  }
`;
const Divcapsulas = styled.div`
 margin:0 auto ;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  list-style: none;
  overflow: hidden; 
  
`;
const Divpadrecap = styled.div`
  display: flex;
  gap: 0 1em ;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden; 
  padding:1.5em 0;
  background-color:#284c5c;

`;
const Divcapsula = styled.div`
  width: calc(80% / 4);
  height: 400px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
gap:1.5em;
  align-items: center;
  background: #fff;
  box-shadow:0px 5px 10px rgba(0, 0, 0, 0.545);
`;

const Titulocapsula = styled.h2`
  margin: 0.5em 0 0 0;
  width: 100%;
  text-align: center;
  font-weight:100;
  font-size:1.2em;
  border-bottom:solid 1px #00000061;
`;
const Parrafocapsula = styled.img`
  width: 100%;
  height: 62%;
  overflow: hidden;
`;

