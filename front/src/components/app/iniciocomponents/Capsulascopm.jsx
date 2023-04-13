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
              <Parrafocapsula>{v.descripcion}</Parrafocapsula>
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
  font-size: 1.5em;
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
  height: 650px;
  max-height: 650px;
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
  background-color:#C1D7DB;
`;
const Divcapsula = styled.div`
  width: calc(80 / 4);
  height: 400px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #B0D3C7;
  box-shadow:0px 1px 10px rgba(0, 0, 0, 0.252);
`;

const Titulocapsula = styled.h2`
  margin-top: 1em;
  width: 200px;
  text-align: start;
  line-height: 1.2;
`;
const Parrafocapsula = styled.p`
  width: 320px;
  height: 160px;
  overflow: hidden;
  padding: 10px 30px;
  text-align: justify;
  line-height: 1.2;
  
`;
const Btncapsula = styled.button`
  padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #222f4928;
  transition: all 2s;
  color: #222f49;
  &:hover {
    background-color: #0b0c3a2d;
    color: #222f49;
    padding: 10px 60px;
  }
`;
