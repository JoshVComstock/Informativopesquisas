import React from "react";
import styled from "styled-components";
import Headercomp from "./informacioncomponents/Headercomp";
import Footer from "../footer";
import Navegacioncomp from "./informacioncomponents/Navegacioncomp";
import Contenidocomp from "./informacioncomponents/Contenidocomp";

const Informaciones = () => {
  return (
    <>
      <Headercomp />
      <Bodyinfo>
      <Contenidocomp/>
      <Navegacioncomp/>
      </Bodyinfo>
      <Footer></Footer>
    </>
  );
};

export default Informaciones;

const Bodyinfo = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
