import React from 'react'
import styled from "styled-components";
const Nosotroscopm = () => {
  return (
      <Nosotrosdiv>
        <Supdiv>
          <Titulo>Sobre Nosotros</Titulo>
          <Parrafosup>
            puente a un mejor nivel de salud para los bolivianos, brindando
            siempre condiciones favorables y productos lí­deres
          </Parrafosup>
        </Supdiv>
        <Infediv>
          <Divimg>
            <Imginfe
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="titulo_img"
            />

            <Divbiotech>
              <H3>Titulo biotech</H3>
              <Parrafo>
              Biotech Bolivia fue fundada en 1993 con el objetivo de ofrecer
                una tecnologí­a confiable y novedosa para la realización de
                pruebas de diagnóstico clí­nico. Habiendo propuesto mejores
                rapia intensiva. Contactando proveedores internacionales de
                renombre mundial, con quienes ha establecido una sólida relaciónBiotech Bolivia fue fundada en 1993 con el objetivo de ofrecer
                una tecnologí­a confiable y novedosa para la realización de
                pruebas de diagnóstico clí­nico. Habiendo propuesto mejores
                rapia intensiva. Contactando proveedores internacionales de
                renombre mundial, con quienes ha establecido una sólida relaciónBiotech Bolivia fue fundada en 1993 con el objetivo de ofrecer
                una tecnologí­a confiable y novedosa para la realización de
                pruebas de diagnóstico clí­nico. Habiendo propuesto mejores
                rapia intensiva. Contactando proveedores internacionales de
                renombre mundial, con quienes ha establecido una sólida relación
                a través de los años.
              </Parrafo>
              <Button>ler mas </Button>
            </Divbiotech>
          </Divimg>
        </Infediv>
      </Nosotrosdiv>
  )
}

export default Nosotroscopm
const Nosotrosdiv = styled.div`
  padding: 3rem;
  margin: 0 auto;
  background-color: #222f49;
  &::before {
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    z-index: -1;
  }
`;

const Parrafosup = styled.p`
margin: 1rem 0;
width:60%;
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
  border-top: 7em;
  border-left: 10px solid #a6445e;
  font-size: 3em;
  letter-spacing: 2px;
  color: #ffffff;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #fff;
  }
`;

const Parrafo = styled.p`
  margin: 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #000000;
  max-height: 400px;
  overflow: hidden;
`;

const Divbiotech = styled.div`

  padding: 3rem;
  display: flex;
  width: 600px;
  height: 400px;
  max-width: 600px;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
`;
const Imginfe = styled.img`
  display: flex;
  flex-direction: row;
  width: 40%;
  max-width:450px;
  height: 70%;
  size: cover;
  /* transition: all 3s;
  &:hover {
    transform: scale(1.05);
  } */
`;
const Infediv = styled.div``;

const Button = styled.button`
  background-color: #484d7ec8;
  color: #fff;
  border: none;
  padding: 1em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #663d3f;
  }
`;