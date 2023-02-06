import React from 'react'
import styled from "styled-components";
const Superiorcomp = () => {
  return (
    <Superiror>
    <Imginicio
      src="https://images.pexels.com/photos/119604/baby-foot-blanket-newborn-119604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
    <Contenidodiv>
      <H3>Programa de Tamizaje NEONATAL</H3>

    </Contenidodiv>
  </Superiror>
  )
}

export default Superiorcomp

const Superiror = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 24% 0);
`;

const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #222f49;
`;
const Titulodiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Butontitulo = styled.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #a6445e;
    color: #fff;
  }
`;
const H3 = styled.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  font-family: "Poppins", sans-serif;
  color: #e0e0e0;
  font-size: 2em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`;
