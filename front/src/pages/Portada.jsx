import React from "react";
import styled from "styled-components";
import {
  Containerdiv,
  Divinput,
  Input,
  Textarea,
  Inputfile,
} from "../style/crud";
import {
  Container,
  Form,
  Botonagregar,
  Tabla,
  Label,
  Divh1,
  Td,
  Botonesacciones,
  Img,
} from "../style/crud";
import {
  Divtitulo,
  Divcrudf,
  Divtabla,
  Divformulario,
  Tablahead,
} from "../style/crud";

const Portada = () => {
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Portada</h1>
        </Divtitulo>
        <Divcrudf>
          <Divformulario>
            <Form>
              <Divh1>
                <h1>Registro</h1>
              </Divh1>
              <Divinput>
                <Label htmlFor="">Titulo</Label>
                <Input type="text" />
              </Divinput>
              <Divinput>
                <Label>Foto</Label>
                <Inputfile type="file" />
                <img src="" alt="" />
              </Divinput>
              <Divinput>
                <Label htmlFor="">Descripcion</Label>
                <Textarea type="text"  />
              </Divinput>
              <Botonagregar>Agregar</Botonagregar>
            </Form>
          </Divformulario>
          <Divtabla>
            <Tabla class="table">
              <Tablahead>
                <tr>
                  <th>Titulo</th>
                  <th>Foto</th>
                  <th>Descripcion</th>
                  <th>Acciones</th>
                </tr>
              </Tablahead>
              <tbody>
                <tr>
                  <Td>Pesquisas</Td>
                  <Td>
                    <Img src=''
                      alt=""
                    />
                  </Td>
                  <Td>esto nos guiara en la ruta</Td>
                  <Td>
                    <Botonesacciones>Eliminar</Botonesacciones>
                    <Botonesacciones>Editar</Botonesacciones>{" "}
                  </Td>
                </tr>
              </tbody>
            </Tabla>
          </Divtabla>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Portada;
