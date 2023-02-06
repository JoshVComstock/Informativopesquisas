import { http} from "./http";
import { useState } from "react";

export const getportada =async () => {
    try {
        const response = await fetch(`${http}principales`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        return response;
      } catch (error) {
        console.log(error);
      }
};
export const Postportada= async(datos)=>{
  const [enviado, setEnviado] = useState(false);
  const response= await fetch(`${http}principales`,{
    method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body:JSON.stringify({
        titulo:datos.titulo,
        foto:datos.foto,
        descripcion:datos.descripcion,
      }),
  });
  const respuesta =await response?.json();
  if((respuesta.ok))
  {
    return enviado;
  }
}