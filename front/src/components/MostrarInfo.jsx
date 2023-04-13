import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MostrarInfo = ({ enviard }) => {
  const [titulo, setTitulo] = useState();
  const [image, setImage] = useState();
  const [descripcion, setDescripcion] = useState();

  useEffect(() => {
    if (Object.keys(enviard).length > 0) {
      setTitulo(enviard.titulo);
      setImage(enviard.foto);
      setDescripcion(enviard.descripcion);
    }
    else{
        console.log("no hay datos josh")
    }
  }, [enviard]);

  return (
    <>
      <Sectionp>
        <Titulo>{titulo}</Titulo>
        <Cuerpo>
          <Img src={image} alt="img" />
          <Divp>{descripcion}</Divp>
        </Cuerpo>
      </Sectionp>
    </>
  );
};
export default MostrarInfo;
const Sectionp = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
`;

const Cuerpo = styled.article`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  height: 80%;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0px 1px 5px #0005;
`;
const Divp = styled.div`
  width: 100%;
  border-radius: 50%;
  text-align: justify;
`;

const Titulo = styled.h2`
  font-size: 2em;
  font-weight: 100;
  margin: 0 1em;
  &::first-letter {
    font-size: 1.5em;
    font-weight: 100;
    color: blue;
  }
`;
