import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Divload, Divloading } from "../../../style/crud";
const Capsulascopm = () => {
  const [capsula, setCapsula] = useState([]);
  const [loading, setLoading] = useState(true);
  async function mostrarcapsula() {
    const response = await fetch(
      "https://informativolaravel-production.up.railway.app/api/capsula",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setCapsula(respuesta);
    setLoading(false);
  }

  useEffect(() => {
    mostrarcapsula();
  }, []);
  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }
  return (
    <Divcapsulas>
      <Titulo>Capsulas informativas</Titulo>
      <>
        <Divpadrecap>
          {capsula.slice(0, 4).map((v, i) => (
            <Divcapsula key={i}>
              <Titulocapsula>{v.titulo}</Titulocapsula>
              <Parrafocapsula src={v.foto}></Parrafocapsula>
              <li>
                <Links to="/informaciones">Ver más</Links>
              </li>
            </Divcapsula>
          ))}
        </Divpadrecap>
      </>
    </Divcapsulas>
  );
};

export default Capsulascopm;

export const Links = styled(Link)`
  padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  border-radius: 1em;
  background-color: #7793bd;
  transition: all 1.5s;
  color: #e8ebf2;
  &:hover {
    background-color: #dbdce75e;
    color: #222f49;
    padding: 10px 60px;
  }
`;

const Titulo = styled.h2`
  border-left: 10px solid #b0d3c7;
  font-size: 2em;

  letter-spacing: 1px;
  color: #7793bd;
  transition: all 1s;
  display: flex;
  align-items: flex-start;
  width: 85%;
  margin: 2em auto;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #39725e;
  }
`;
const Divcapsulas = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  list-style: none;
  overflow: hidden;
  @media (max-width: 980px) {
    height: 100%;

    & section {
      width: calc(100% / 4);
    }
  }
  @media (max-width: 720px) {
    height: 100%;

    & section {
      width: calc(120% / 3);
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 520px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    & section {
      width: 80%;
    }
  }
`;
const Divpadrecap = styled.article`
  display: flex;
  gap: 0 1em;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  padding: 1.5em 0;
  position: relative;
  background-color: #284c5c;
  @media (max-width: 980px) {
    gap: 1em;
  }
`;
const Divcapsula = styled.section`
  width: calc(80% / 4);
  height: 400px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.545);
`;

const Titulocapsula = styled.h2`
  margin: 0 0 0 0;
  width: 100%;
  text-align: center;
  font-weight: 100;
  font-size: 1.2em;
  background-color: #284c5c96;
  border-bottom: solid 1px #ffffff60;
  color: #fff;
`;
const Parrafocapsula = styled.img`
  width: 100%;
  height: 62%;
  overflow: hidden;
`;
