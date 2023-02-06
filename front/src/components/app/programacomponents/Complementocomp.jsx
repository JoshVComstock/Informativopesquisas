import React from 'react'
import styled from "styled-components";
const Complementocomp = () => {
  return (
    <Ayuda>
        
       <Cteneniendo>
       <Title>
          Contenido
        </Title>
        <Contenidoa>
        Siguiendo tendencias mundiales, nuestra empresa facilita la vigilancia de la salud de la población antes que la enfermedad se presente. De esta manera buscamos prevenir la aparición de enfermedad o reducir sus consecuencias con tratamientos preventivos. Biotech Bolivia es pionera es esta área en nuestro paí­s, introduciendo la pesquisa poblacional en apoyo de la salud pública.
        </Contenidoa>
       </Cteneniendo>
      </Ayuda>
  )
}

export default Complementocomp


const Ayuda = styled.div`
width: 100%;
height:60vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;
text-align:start;
`;


const Cteneniendo = styled.div`
width: 60%;
height:90%;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#222f49;
    color:#fff;
  border-radius:3em 0;
`;

const Title = styled.h2`
font-size:35px;

`;
const Contenidoa = styled.h4`

font-size:15px;
text-align: justify;
padding:3rem;
`;
