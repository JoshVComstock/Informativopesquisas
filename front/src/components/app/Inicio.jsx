import React from "react";
import styled from "styled-components";
import Secion1 from "./seccions/secion1";
function Inicio() {
  return (
    <Divpadre>
      <Secion1 />
      <Nosotrosdiv>
        <Supdiv>
          <Titulo>Sobre Nosotros</Titulo>
          <Parrafo>
            puente a un mejor nivel de salud para los bolivianos, brindando
            siempre condiciones favorables y productos lí­deres
          </Parrafo>
        </Supdiv>
        <Infediv>
          <Divimg>
            <Imginfe
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="titulo_img"
            />

            <Divbiotech>
              <h2>Titulo biotech</h2>
              <Parrafo>
                Biotech Bolivia fue fundada en 1993 con el objetivo de ofrecer
                una tecnologí­a confiable y novedosa para la realización de
                pruebas de diagnóstico clí­nico. Habiendo propuesto mejores
                rapia intensiva. Contactando proveedores internacionales de
                renombre mundial, con quienes ha establecido una sólida relación
                a través de los años.
              </Parrafo>
              <Button>ler mas </Button>
            </Divbiotech>
          </Divimg>
        </Infediv>
      </Nosotrosdiv>
      <Divprogra>
        <Supdiv>
          <Titulo>Programa de Tamizaje Bolivia</Titulo>
        </Supdiv>
        <Divimg>
          <Divprograma>
            <h2>Programa</h2>
            <Parrafo>
              Biotech Bolivia fue fundada en 1993 con el objetivo de ofrecer una
              tecnologí­a confiable y novedosa para la realización de pruebas de
              diagnóstico clí­nico. Habiendo propuesto mejores rapia intensiva.
              Contactando proveedores internacionales de renombre mundial, con
              quienes ha establecido una sólida relación a través de los años.
            </Parrafo>
          </Divprograma>
          <Conteniendocard>
            <Imgcard src="image.jpg" alt="Imagen de la tarjeta" />
            <Cardbody>
              <Hcard2>Título de la tarjeta</Hcard2>
              <p>Descripción de la tarjeta</p>
              <Btn href="#">Ver más</Btn>
            </Cardbody>
          </Conteniendocard>
        </Divimg>
      </Divprogra>
      <Divcapsulas>
        <Titulo>Informate con nuestras capsulas</Titulo>
        <Divpadrecap>
          <Divcapsula>
            <Titulocapsula>Informate con nuestras capsulas</Titulocapsula>
            <Parrafocapsula>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore officiis quidem et minus in laborum illo magnam aliquam
              porro, culpa animi, consequuntur vero tempore nam id provident,
              nemo sequi dicta?us in laborum illo magnam aliquam porro, culpa
              animi, consequuntur vero tempore nam id provident, nemo sequi
              dicta?
            </Parrafocapsula>
            <Btncapsula>Ver mas</Btncapsula>
          </Divcapsula>
          <Divcapsula>
            <Titulocapsula>titulo_tarjeta</Titulocapsula>
            <Parrafocapsula>contenido</Parrafocapsula>
            <Btncapsula>Ver mas</Btncapsula>
          </Divcapsula>{" "}
          <Divcapsula>
            <Titulocapsula>titulo_tarjeta</Titulocapsula>
            <Parrafocapsula>contenido</Parrafocapsula>
            <Btncapsula>Ver mas</Btncapsula>
          </Divcapsula>
          <Divcapsula>
            <Titulocapsula>titulo_tarjeta</Titulocapsula>
            <Parrafocapsula>contenido</Parrafocapsula>
            <Btncapsula>Ver mas</Btncapsula>
          </Divcapsula>
          <Divcapsula>
            <Titulocapsula>titulo_tarjeta</Titulocapsula>
            <Parrafocapsula>contenido</Parrafocapsula>
            <Btncapsula>Ver mas</Btncapsula>
          </Divcapsula>
        </Divpadrecap>
      </Divcapsulas>
    </Divpadre>
  );
}

export default Inicio;

const Divpadre = styled.div``;

// seccion nosostros
const Nosotrosdiv = styled.div`
  margin: 0 auto;
  background-color: #39415c;
`;

const Supdiv = styled.div`
  width: 45%;
  text-align: justify;
`;
const Titulo = styled.h2`
  margin-left: 3em;
  border-left: 10px solid #ffffff7f;
  font-size: 3em;
  letter-spacing: 2px;
  color: #fff;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #ffffff;
  }
`;
const Parrafo = styled.p`
  margin: 0 0 0 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #fff;
`;

const Divbiotech = styled.div`
  margin: 3rem;
  padding: 3rem;
  display: flex;
  width: 600px;
  height: 400px;
  max-width: 600px;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
  border-right: 10px solid #ffffffb8;
  background-color: #35476d9f;
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 14% 100%, 0 50%);
`;
const Imginfe = styled.img`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  margin: 10px 0px 0 30px;
  width: 40%;
  height: 70%;
  padding-right: 10px;
  size: cover;
  transition: all 3s;
  &:hover {
    transform: scale(1.05);
  }
`;
const Infediv = styled.div``;
const Divimg = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  background-color: #484d7ec8;
  color: #fff;
  border: none;
  padding: 1em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #663d3f;
  }
`;
const Cardbody = styled.div`
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
`;
const Conteniendocard = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    height: 400px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover Cardbody {
    visibility: visible;
    opacity: 1;
  }
`;

const Imgcard = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
`;
const Hcard2 = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;
const Divprogra = styled.div`
  margin: 2em 4rem 0 3rem;
`;

const Btn = styled.a`
  padding: 10px 20px;
  background-color: #131313;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #555;
    cursor: pointer;
  }
`;

const Divprograma = styled.div`
  margin: 3rem;
  padding: 3rem;
  display: flex;
  max-width: 600px;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
  border-right: 10px solid #916565b9;
`;

const Imgprograma = styled.img`
  display: flex;
  flex-direction: row;
  margin: 3em 2em 0 0;
  width: 40%;
  height: 30%;
  padding-right: 10px;
  size: cover;
  transition: all 3s;
`;

const Divcapsulas = styled.div`
  margin-top: 0 auto;
  padding: 3rem;
  width: 100%;
  height: 450px;
`;
const Divpadrecap = styled.div`
  margin-top: 2rem;
  padding: 10px;
  display: flex;
  gap: 2em;
  width: 100%;
  height: 450px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden; //
`;
const Divcapsula = styled.div`
  width: calc(100 / 3);
  height: 420px;
  background-color: #bfccccca;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

const Titulocapsula = styled.h2`
  margin-top: 1em;
  width: 200px;
  text-align: start;
  line-height: 1.2;
`;
const Parrafocapsula = styled.p`
  width: 300px;
  height: 200px;
  overflow: hidden;
  padding: 10px 40px;
  text-align: justify;
  line-height: 1.2;
`;
const Btncapsula = styled.button`
  padding: 10px 40px;
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
