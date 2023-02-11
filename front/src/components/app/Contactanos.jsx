import styled from "styled-components";

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

<Contenido>
  
</Contenido>

    </>
  );
};

export default Contactanos;

export const Contenido = styled.div`

background-color:#8a1a1a;
width:100vw;
height:100vh;
`;
export const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-size: cover;
  border:none;

  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);

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
top:0;
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
  max-width: 30%;
  min-width: 20%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`;
