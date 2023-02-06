import React from 'react'
import styled, { keyframes } from "styled-components";
const Contenido = () => {
  return (
    <Div>
        <Divuno>
          <Texto>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            sint amet. Laborum, voluptate, nemo molestias, sed beatae impedit
            itaque non alias quasi ratione assumenda vitae vero. Nisi rem
            dolores culpa.
          </Texto>
        </Divuno>
        <Divdos>
          <Title>Titulo A</Title>
        </Divdos>
        <Divtres>
          {" "}
          <Titleb>Titulo b</Titleb>
        </Divtres>
        <Divcuatro>
          {" "}
          <Textob>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            sint amet. Laborum, voluptate, nemo molestias, sed beatae impedit
            itaque non alias quasi ratione assumenda vitae vero. Nisi rem
            dolores culpa.
          </Textob>
        </Divcuatro>
      </Div>

  )
}

export default Contenido

const Div = styled.div`
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;
const Divuno = styled.div`
  /* background-color: #a84141; */
  width: 50%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -2;
`;
const Divdos = styled.div`
  width: 50%;
  height: 55vh;
  display: flex;

  align-items: center;
`;

const Title = styled.h2`
  background-color: transparent;
  width: 80vh;
  height: 10vh;
  text-align: center;
  padding: 2vh 0;
  color: #000000;
  border-left: solid 10px;
  transition: all 2s linear;
  &:hover {
    border-left: none;
    background-image: url(http://127.0.0.1:8000/img/empresa/vision_.jpg);
    /* box-shadow: 5px 5px 6px 8px rgba(0, 0, 0, 0.3); */
    width: 80vh;
    height: 80%;
    color: transparent;
    background-size: cover;
  }
`;
const Titleb = styled.h2`
  background-color: transparent;
  width: 80vh;
  height: 10vh;
  text-align: center;
  padding: 2vh 0;
  color: #000000;
  border-right: solid 10px;
  transition: all 3s linear;
  &:hover {
    border-right: none;
    background-image: url(http://127.0.0.1:8000/img/empresa/vision_.jpg);
    width: 100%;
    height: 100%;
    color: transparent;
    background-size: cover;
    width: 80vh;
    height: 80%;
  }
`;

const Texto = styled.div`
  background-color: #222f49;
  width: 48vh;
  height: 48vh;
  border-radius: 2em;
  color: #fff;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  &::before {
    background-color: #3e239e93;
    position: absolute;
    padding: 0px;
    width: 48vh;
    height: 48vh;
    content: "";
    /* top:10vh;
    left:30vh; */
    z-index: -1;
    border-radius: 2em;
    transform: rotate(-7deg);
  }
`;

const Divtres = styled.div`
  width: 50%;
  height: 55vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Divcuatro = styled.div`
  width: 50%;
  height: 55vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Textob = styled.div`
  background-color: #222f49;
  width: 48vh;
  height: 48vh;
  border-radius: 2em;
  color: #fff;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  &::before {
    background-color: #3e239e93;
    position: absolute;
    padding: 0px;
    width: 48vh;
    height: 48vh;
    content: "";
    /* top:10vh;
    left:30vh; */
    z-index: -1;
    border-radius: 2em;
    transform: rotate(7deg);
  }
`;
