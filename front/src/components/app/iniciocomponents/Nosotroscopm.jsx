import React from "react";
import styled from "styled-components";
const Nosotroscopm = () => {
  return (
    <Nosotrosdiv>
      <Supdiv>
        <Titulo>Sobre Nosotros</Titulo>
        {/* <Parrafosup>
            puente a un mejor nivel de salud para los bolivianos, brindando
            siempre condiciones favorables y productos lí­deres
          </Parrafosup> */}
      </Supdiv>
      <Infediv>
        <Divimg>
          <Imginfe
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="titulo_img"
          />
        </Divimg>
        <Divbiotech>
          <H3>Titulo biotech</H3>
          <Parrafo>
            Biotech Bolivia fue fundada en 1993 con el objetivo de ofrecer una
            tecnologí­a confiable y novedosa para la realización de pruebas de
            diagnóstico clí­nico. Habiendo propuesto mejores rapia intensiva.
            Contactando proveedores internacionales de renombre mundial, con
            quienes ha establecido una sólida relaciónBiotech Bolivia fue
            fundada en 1993 con el objetivo de ofrecer una tecnologí­a confiable
            y novedosa para la realización de pruebas de diagnóstico clí­nico.
            Habiendo propuesto mejores rapia intensiva. Contactando proveedores
            internacionales de renombre mundial, con quienes ha establecido una
            sólida relaciónBiotech Bolivia fue fundada en 1993 con el objetivo
            de ofrecer una tecnologí­a confiable y novedosa para la realización
            de pruebas de diagnóstico clí­nico. Habiendo propuesto mejores rapia
            intensiva. Contactando proveedores internacionales de renombre
            mundial, con quienes ha establecido una sólida relación a través de
            los años.
          </Parrafo>
          <Button>ler mas </Button>
        </Divbiotech>
      </Infediv>
    </Nosotrosdiv>
  );
};

export default Nosotroscopm;
const Nosotrosdiv = styled.div`
  margin: 0 auto;
  height: 80vh;
  position: relative;
  gap: 1em;
  z-index: 1;
padding:1em;
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 65%;
    background-color: #f7c9b5;
    left: -5%;
    bottom: 10%;
    z-index: -1;
    border-radius: 0 5em 5em 0;
  }
`;

const Parrafosup = styled.p`
  margin: 1rem 0;
  width: 60%;
  text-align: justify;
  line-height: 1.6;
  color: #ffffff;
  max-height: 300px;
  overflow: hidden;
`;

const H3 = styled.h3`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  color: #222352;
`;
const Divimg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;  

const Supdiv = styled.div`
  width: 45%;
  text-align: justify;
`;

const Titulo = styled.h2`
 border-left: 10px solid #46628d;
  font-size: 1.5em;
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

const Parrafo = styled.p`
  margin: 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #46628d;
  max-height: 400px;
  overflow: hidden;
`;

const Divbiotech = styled.div`
  padding: 2.2rem;
  display: flex;
 width:600px;
 height:380px;
  flex-direction: column;
  align-items: stretch;
  background-color: #c1d7db;
  position:relative;
`;
const Imginfe = styled.img`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 400px;
  border-radius: 3em 0 0 3em;
  size: cover;
  border-radius: 50%;
  /* transition: all 3s;
  &:hover {
    transform: scale(1.05);
  } */
`;
const Infediv = styled.section`
  display: flex;
  gap: 1em;
  width: 80%;
  height: 100%;
  margin:0 auto;
  justify-content:center;
  align-items:center;
`;

const Button = styled.button`
  width:30%;
margin:0.5em 0; 
padding:0.5em;
border:solid 1px #fff;
background-color:#405d89;
position:absolute;
right:1.5em;
bottom: 1em;
color:#fff;
transition:all 1.5s ;
cursor:pointer;
&:hover{
  background-color:#fff;
color:#405d89;
}
`;
