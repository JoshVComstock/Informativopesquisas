import React from "react";
import Footer from "../footer";
import styled from "styled-components";
import Superiorcomp from "./programacomponents/superiorcomp";
import Contenidocomp from "./programacomponents/contenidocomp";
import Complementocomp from "./programacomponents/Complementocomp";
const Programas = () => {
  return (
    <>
      <Superiorcomp />
      <Contenidocomp/>
      <Titulo1>
          titulo
        </Titulo1>
     <Complementocomp></Complementocomp>
      <Footer></Footer>
    </>
  );
};

export default Programas;
const Titulo1 = styled.div`
text-align:left;
margin: 1em 3em ;
border:none ;
border-left: solid 10px #222f49;
font-size:35px;
`;
