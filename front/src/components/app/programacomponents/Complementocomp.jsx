import React, { useState, useEffect } from "react";
import Loading from "../../loading";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";

const Complementocomp = () => {
  const [contenidos, setContenidos] = useState([]);

  const [loading, setLoading] = useState(true);

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

    setLoading(false);
    console.log(loading);
  }

  useEffect(() => {
    mostrarcontenidos();
  }, []);
  // el|| <Skeleton /> es una funcion del paquete de loading
  return (
    <Ayuda>
      {loading && <Loading />}
      {contenidos.map((v, i) => (
        <Cteneniendo key={i}>
          <Title>{v.titulo_desc || <Skeleton />}</Title>
          <Contenidoa>{v.compemento || <Skeleton />}</Contenidoa>
         
        </Cteneniendo>
         
      ))}
      ;
    </Ayuda>
  );
};

export default Complementocomp;

const Ayuda = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: start;
  
`;
// const animation = keyframes`
//  0% {left: 16% ;
//  }
//   50% {left: 17%;
//    }
//   100% {left: 16%;
//    }
// `;

const Img = styled.img`
width:300px;
height:300px;
`;

const Cteneniendo = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222f49;
  color: #fff;

  &::before {
    content: "";
    width: 450px;
    height: 430px;
    background-color: #2ea6caa7;
    position: absolute;
    z-index: -1;
    left: 10em;
    border-radius: 50% 0;
    transform: translatey(-3em);
    transition:all 2s;
    
           
  }
&:hover{
&::before{
  border-radius:50% 0;
  transform: translatey(-2em);
  
  box-shadow:  -12px -12px 24px #3a5e67;
}
&::after{
  box-shadow:  
             5px 5px 14px #2c2b2b;
             background-color: #918d8d99;          
}
}
  &::after {
    
    content: "";
    width:7%;
    height: 25%;
    background-color: #ffffff;
    position: absolute;
   
    transition:all 1s;

/*  
    box-shadow:  -12px -12px 24px #3a5e67,
             12px 12px 24px #2d4850; */

    left:25%;
    border-radius: 0 50%  50% 0;
    
   
  }
  border-radius:2em;
`;

const Title = styled.h2`
  font-size: 35px;
`;
const Contenidoa = styled.h4`

  font-size: 15px;
  text-align: justify;
  padding: 1em 5rem 1em 10em ; 
`;
