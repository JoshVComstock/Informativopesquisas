import React from "react";
import styled from "styled-components";
import Centrosnavcopm from "./Centros/Centrosnavcopm";
import Diagnosticocomp from "./Centros/Diagnosticocomp";
import Footer from "../footer";
import Tablecentrocopm from "./Centros/Tablecentrocopm";

const Centross = () => {


  return (
    <Content>
      <Centrosnavcopm />
      <Titulo>Centros de diagnostico</Titulo>
      <Diagnosticocomp />
   <Tablecentrocopm></Tablecentrocopm>
      <Footer></Footer>
    </Content>
  );
};

export default Centross;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
const Titulo = styled.h2`
  margin: 1em 2em 1em 3em;
  font-size: 2em;
  border-left: 1em solid rgb(152, 33, 39);
`;


