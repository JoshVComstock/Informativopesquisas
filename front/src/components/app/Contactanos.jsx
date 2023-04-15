import styled from "styled-components";
import Footer from "../footer";

const Contactanos = () => {
  return (
    <>
  
     <Titulodiv>
        <Imginicio />
        <Contenidodiv>
          <H3> Conntactate con nosostros</H3>
          <Parrafotip></Parrafotip>
        </Contenidodiv>
      </Titulodiv>
      <Divtodo>
      <H1>Contactanos</H1>
      <Formulario>
        <Parrent>
          <Div1>
            <H2>informacion de contacto</H2>{" "}
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              praesentium dicta perferendis adipisci impedit laboriosam?
            </Parrafo>
            <h4>cel:75215686</h4>
            <h4>email:biotechadmsadsl</h4>
            <h3>ubicacion</h3>
          </Div1>
          <Div2>
            <Label>nombre</Label>
            <Input type="text" />
            <Label>Email</Label>
            <Input type="email" />
            <Label>Mensaje</Label>
            <Input type="text" />
            <Label>Celular</Label>
            <Input type="number" />
            <Obutton>enviar</Obutton>
          </Div2>
        </Parrent>
      </Formulario>
     </Divtodo>

      <Footer />
    </>
  );
};

export default Contactanos;
const Divtodo = styled.div`
height:120vh;
overflow:hidden;
@media (max-width: 520px) {
  height:90vh;
 
  }
`;

const Parrent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 70vw;
  height: 80vh;

  @media (max-width: 920px) {
    width: 90%;
  height:auto;
  overflow:hidden;
  }
  @media (max-width: 720px) {
 width:95%;
 margin:0 auto;
  }
`;
const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: #0b41ace6;
  width: 30vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3em;
  color: #fff;
  position: relative;
  overflow:hidden;
  @media (max-width: 920px) {
  height:100%;
  width:100%;
  overflow:hidden;
  }
  @media (max-width: 720px) {
  width:100%;
  padding:1.2em;
  }
  @media (max-width: 520px) {
  width:100%;
  padding:0.5em 0.5em;

  }
  &::before {
    content: "";
    width: 150px;
    display: block;
    height: 150px;
    background-color: #8b185f;
    position: absolute;
    border-radius: 90% 0 0 0;
    bottom: 0;
    right: 0;
    @media (max-width: 520px) {
      width: 100px;
      height: 100px;
  }
  }
  &::after {
    content: "";
    width: 150px;
    height: 150px;
    display: block;
    background-color: #5a1f72a9;
    position: absolute;
    bottom: 60px;
    right: 60px;
    border-radius: 50%;
    @media (max-width: 520px) {
 display:none;
  }
  }
  gap: 1em;
`;
const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: #f3f3f3;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  padding: 5em;
  box-shadow:  1px 2px 5px  rgba(0, 0, 0, 0.34);
  -webkit-box-shadow:  1px 2px 5px  rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 1px 2px 5px  rgba(0, 0, 0, 0.34);
  @media (max-width: 920px) {
  height:100%; 
  }
  @media (max-width: 720px) {
 width:100%;
 padding:0.6em;
  }
  @media (max-width: 520px) {
  width:100%;
  padding:0.5em 0.01em;
 
  }
`;

const Obutton = styled.button`
  padding: 1em;
  width: 12em;
  margin: 0 0 0 65%;
  position: relative;
  transition: all 3s;
  cursor: pointer;
  &::before {
    content: "";
    width: 30%;
    display: block;
    height: 100%;
    background-color: #8b185f;
    position: absolute;
    border-radius: 90% 0 0 0;
    bottom: 0;
    right: 0;
    transition: all 1s;
    z-index: 2;
  }
  &::after {
    content: "";
    width: 36%;
    display: block;
    height: 100%;
    background-color: #24188b;
    position: absolute;
    border-radius: 90% 0 0 0;
    bottom: 0;
    right: 0;
    transition: all 1s;
    z-index: 1;
  }
`;

const Parrafo = styled.p`
  text-align: justify;
`;

const H2 = styled.h2`
  margin: 0 0 1em 0;
`;
const H1 = styled.h1`
  font-size: 35px;
  padding: 0.5em;
  color: #000000;
  text-align: center;
  background-color: #ffffff;
`;
export const Formulario = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
export const Label = styled.label`
  color: #1b1a1a;
  padding: 0 3em;
  font-size: 16px;
  width: 50%;
`;

export const Descripcion = styled.input`
  width: 80%;
  height: 10em;
  background-color: transparent;
  border: none;
  border-left: 10px;

  color: #fff;
`;

export const Input = styled.input`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 3em;
  margin: 1em 3em;
  border: none;
  border-bottom: solid #6b4848 1px;
  color: #000000;
  background: transparent;
`;
export const Contenido = styled.div`
  background-color: #b0b9df;
  width: 60vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 3em;
  padding: 2em;
  border-radius: 3em;
  &::before {
    content: "";
    background-color: #2a148b;
    width: 60vw;
    height: 65vh;
    position: absolute;
    z-index: -1;
    left: 20%;
    border-radius: 3em;
    transform: rotate(2deg);
  }
`;
export const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-size: cover;
  border: none;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
  @media (max-width: 920px) {
  height:100%; 
  }
 
  @media (max-width: 520px) {
 display:none;
 
  }
`;
export const Parrafotip = styled.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
`;
export const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #092255e6;
`;
export const Titulodiv = styled.div`
  top: 0;
  position: relative;
  width: 100%;
  height: 60vh;
`;
export const Butontitulo = styled.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #2bb0b4;
    color: #000000;
  }
`;
export const H3 = styled.h2`
  margin-top: 4em;
  width: 30%;

  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
  @media (max-width: 520px) {
  width:100%;
 font-size:2em;
  }
`;
