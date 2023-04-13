import React from 'react'
import styled from "styled-components";
const Headercomp = () => {
  return (
    <Superiror>
    
    <Contenidodiv>
      <H3>Informate con nuestras capsulas informativas</H3>
    </Contenidodiv>
  </Superiror>
  )
}

export default Headercomp

const Superiror = styled.div`
position: relative;
width: 100%;
height: 50vh;
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

const H3 = styled.h2`
margin-top: 4em;
max-width: 40%;
min-width: 30%;
font-family: "Poppins", sans-serif;
color: #e0e0e0;
font-size: 2em;
display: flex;
padding: 10px;
text-align: left;
border-left: 10px solid #ffffff;
`;
