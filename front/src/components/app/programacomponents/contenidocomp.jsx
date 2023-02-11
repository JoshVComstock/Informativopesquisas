
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Contenidocomp = () => {
  const [contenidos, setContenidos] = useState([]);

  async function mostrarcontenidos() {
    const response = await fetch("http://127.0.0.1:8000/api/programa", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setContenidos(respuesta);
  }

  useEffect(() => {
    mostrarcontenidos();
  }, []);

  return (
    <Divprogra>
        {contenidos.map((v,i) => (
      <Content key={i}>
        <Contendidouno>
          <Titulocn>{v.nombre}</Titulocn>
          <Parrafocn>
           {v.contenido_a}
          </Parrafocn>
        </Contendidouno>
        <Contendidodos>
          <Titulocn>{v.titulo}</Titulocn>
          <Parrafocn>
           {v.contenido_b}
          </Parrafocn>
        </Contendidodos>
      </Content>
        ))};
    </Divprogra>
  );
};

export default Contenidocomp;

const Divprogra = styled.div`
  width: 100%;
  height: 47vh;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  max-width: 1350px;
  height: 45vh;
  max-height: 400px;
  z-index: 2;
  display: flex;
  margin-top:3em;
  gap:3em; 
`;
const Contendidouno = styled.div`
  width: calc(100% / 2);
  height: 100%;
  background-color: #f779d9;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  transition: all 2s;
  &::before{
    content:"";
    position:absolute;
    width: 38%;
    height: 45%;
    transform:rotate(-8deg);
    z-index:-1;
transition:all 3s;
    background-color:#22728b6c;
  }
  &:hover{
    width: calc(102% / 2);
  height: 102%;&::before{
    transform:rotate(0deg);
  }
  }
`;
const Contendidodos = styled.div`
  width: calc(100% / 2);
  background-color: #74bacf;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  &::before{
    content:"";
    position:absolute;
    width: 38%;
    height: 45%;
    transform:rotate(8deg);
    z-index:-1;
    background-color:#8b22226c;
    transition:all 3s;
  }
  &:hover{
    width: calc(102% / 2);
  height: 102%;&::before{
    transform:rotate(0deg);
  }
}
`;

const Parrafocn = styled.p`
  text-align: justify;
  padding: 0 3em;
`;
const Titulocn = styled.h2`
  color: #fff;
  font-size: 30px;
`;
