import React from "react";
import styled from "styled-components";
import { Containerdiv } from "../style/crud";
import { Container } from "../style/crud";
import { Divtitulo, Divcrud, Divtabla, Divformulario } from "../style/crud";

const Portada = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Portada</h1>
        </Divtitulo>
        <Divcrud>
          <Divformulario>
            <form action="">
              <div>
                <label htmlFor="">Titulo</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Foto</label>
                <input type="file" />
              </div>
              <div>
                <label htmlFor="">Descripcion</label>
                <input type="text" />
              </div>
            </form>
          </Divformulario>
          <Divtabla>
            <table classname="table">
              <thead>
                <tr>
                  <td>Titulo</td>
                  <td>Foto</td>
                  <td>Descripcion</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pesquisas</td>
                  <td>null</td>
                  <td>esto nos guiara en la ruta</td>
                  <td>
                    <button>Eliminar</button>
                    <button>Editar</button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </Divtabla>
        </Divcrud>
      </Containerdiv>
    </Container>
  );
};

export default Portada;
