import React, { useState, useEffect } from "react";
import {
  Divformulario,
  Form,
  Divh1,
  Divinput,
  Label,
  Input,
  Botonagregar,
} from "../../style/crud";
import { postRed, updateRed } from "../../services/red";

const Registroredcentros = ({ getApi, actual, setActual }) => {
  const [red, setRed] = useState("");

  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setRed(actual.red);
    }
  }, [actual]);

  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Red</Label>
          <Input
            type="text"
            value={red}
            onChange={(e) => setRed(e.target.value)}
          />
        </Divinput>
        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateRed(
                {
                  id: actual.id,
                  red: red,
                },
                () => {
                  setActual({});
                  setRed("");
                  getApi();
                }
              );
            } else {
              postRed(red, () => {
                setRed("");
                getApi();
              });
            }
          }}
        >
          {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroredcentros;
