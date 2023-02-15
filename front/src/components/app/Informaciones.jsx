import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
      <Bodyinfo>
        <Contenidos>
          <Divuno>
          <Divcapsulas>
    
 
     
        <Divpadrecap >
        {capsula.map((v,i) => (
            <Divcapsula key={i} >
              <Titulocapsula>{v.titulo}</Titulocapsula>
              <Parrafocapsula>{v.descripcion}</Parrafocapsula>
              <li><Links to="/informaciones">Ver más</Links></li>
             
            </Divcapsula>

            ))}
        </Divpadrecap>
      
 
    </Divcapsulas>


          </Divuno>
          <Divdos>
            <h1>capsulas</h1>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
            <Abutton>capsula 1</Abutton>
          </Divdos>
        </Contenidos>
      </Bodyinfo>
      <Footer></Footer>
    </>
  );
};

export default Informaciones;

const Abutton = styled.button`
  width: 100%;
  height: 3.5em;
 margin: 0.2em 0 ;
`;
const Contenidos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #682f2f;
`;
const Divuno = styled.div`
  grid-area: 1 / 1 / 5 / 4;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;
const Divdos = styled.div`
  grid-area: 1 / 4 / 5 / 5;
  height: 100%;
  width: 100%;
  background-color: #72abad;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;

const Bodyinfo = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
// capsulas 

export const Links = styled (Link)`
 padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
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
`

const Titulo = styled.h2`
  border-top: 7em;
  border-left: 10px solid #222f49;
  font-size: 3em;
  letter-spacing: 2px;
  color: #222f49;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #a6445e;
  }
`;
const Divcapsulas = styled.div`
  margin-top: 0 auto;
  padding: 3rem;
  width: 100%;
  height: 100%;
 
  background: rgb(223, 225, 235);
  list-style: none;
`;
const Divpadrecap = styled.div`
  margin-top: 2rem;
  padding: 10px;
  display: flex;
  gap: 2em;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden; //
`;
const Divcapsula = styled.div`
  width: calc(100% / 3);
  height: 350px;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background: rgb(223, 225, 235);
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.25) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
