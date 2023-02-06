import React from "react";
import styled from "styled-components";
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
import { useState } from "react";

const Registrocentros = () => {
  const [centrodi, setCentrodi] = useState("");
  const [sede, setSede] = useState("");
  const [centro, setCentro] = useState("");
  const [foto, setFoto] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [dirreccion, setDirreccion] = useState("");

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/centros", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        centro_diagnostico: centrodi,
        sede: sede,
        centro: centro,
        foto: foto,
        telefono: telefono,
        dirreccion: dirreccion,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setCentrodi("");
      setSede("");
      setCentro("");
      setFoto("");
      setTelefono("");
      setDirreccion("");
    }
  };
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      return console.log("Error: ", error);
    };
  };

  const llenarimagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divformall>
          <Divinputext>
            <Divinput>
              <Label htmlFor="">Centro diagnostico</Label>
              <Input type="text"  value={centrodi} onChange={(e)=>setCentrodi(e.target.value)}/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Sede</Label>
              <Input type="text" value={sede} onChange={(e)=>setSede(e.target.value)} />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Centro</Label>
              <Input type="text" value={centro} onChange={(e)=>setCentro(e.target.value)} />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Telefono</Label>
              <Input type="Number" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
            </Divinput>
          </Divinputext>
          <Divimg>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" onChange={llenarimagen} />
              <Imgfile src={foto} alt="" />
            </Divinput>

            <Divinput>
              <Label htmlFor="">Direccion</Label>
              <Input type="text" value={dirreccion} onChange={(e)=>setDirreccion(e.target.value)} />
            </Divinput>
          </Divimg>
        </Divformall>

        <Botonagregar onClick={enviar}>Agregar</Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registrocentros;
const Divformall = styled.div`
  display: flex;
`;
const Divinputext = styled.div`
  margin: 5px;
  width: 250px;
`;
const Divimg = styled.div`
  margin: 5px;
  width: 250px;
`;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
