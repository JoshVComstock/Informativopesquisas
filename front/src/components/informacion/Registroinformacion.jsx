import React from "react";
import {
  Divformulario,
  Form,
  Divh1,
  Divinput,
  Label,
  Input,
  Inputfile,
  Textarea,
  Botonagregar,
  Textarea1,
} from "../../style/crud";
import styled from "styled-components";
const Registroinformacion = () => {
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divtotal>
          <Divinput1>
            <Divinput>
              <Label htmlFor="">Titulo</Label>
              <Input type="text" />
            </Divinput>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" />
              <Imgfile src="" alt="" />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Descripcion</Label>
              <Textarea1 />
            </Divinput>
          </Divinput1>
          <Divinput2>
            <Divinput>
              <Label htmlFor="">Mision</Label>
              <Input type="text" />
            </Divinput>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" />
              <Imgfile src="" alt="" />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Vision</Label>
              <Input type="text" />
            </Divinput>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" />
              <Imgfile src="" alt="" />
            </Divinput>
          </Divinput2>
        </Divtotal>
        <Botonagregar>Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroinformacion;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
const Divtotal=styled.div`
  display: flex;
`;
const Divinput1=styled.div`
  margin: 7px;
`;
const Divinput2=styled.div`
    margin: 7px;
`;