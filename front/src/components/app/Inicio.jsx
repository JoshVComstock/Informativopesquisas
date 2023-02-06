import React from "react";
import styled from "styled-components";
import Superior from "./iniciocomponents/Superior";
import Programcopm from "./iniciocomponents/Programcopm";

import Nosotroscopm from "./iniciocomponents/Nosotroscopm";
import Capsulascopm from "./iniciocomponents/Capsulascopm";
import Footer from "../footer";
function Inicio() {
  return (
    <>
      <Superior />
      <Programcopm />
      <Nosotroscopm />
      <Capsulascopm />
     <Footer/>
    </>
  );
}

export default Inicio;

