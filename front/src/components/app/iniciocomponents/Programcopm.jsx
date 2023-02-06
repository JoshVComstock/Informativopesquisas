import React from 'react'
import styled from "styled-components";
const Programcopm = () => {
  return (
      <Divprogra>
        <Supdiv>
          <Titulo>Programa de Tamizaje Bolivia</Titulo>
        </Supdiv>
        <Divimg>
          <Divprograma>
            <H2>Programa</H2>
            <Parrafo>
              Biotech Bolivia fue fundada en 1993 con el objetivo de ofrecer una
              tecnologí­a confiable y novedosa para la realización de pruebas de
              diagnóstico clí­nico. Habiendo propuesto mejores rapia intensiva.
              Contactando proveedores internacionales de renombre mundial, con
              quienes ha estableciernacionales de renombre mundial, con
              quienes ha establecido una sólida relación a través de los años.
            </Parrafo>
          </Divprograma>
          <Conteniendocard>
            <Img
              src="http://www.inamen.gob.bo/Imagenes/1435597774-79.jpg"
              alt="Imagen de la tarjeta"
            />
          </Conteniendocard>
        </Divimg>
      </Divprogra>

  )
}

export default Programcopm
const Divprogra = styled.div`
  background-color: #ffffff;
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

background-color:#222f49;
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
  color: #211e50;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #fff;
  }
`;