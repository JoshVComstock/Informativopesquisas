import { useState, useEffect } from "react";

export const UseFech=(ruta) => {
  const [res, setRes] = useState([]);

  const getApi = async () => {
    const response = await ruta();
    const json = await response?.json();
    setRes(json);
    console.log(json);
  };
  useEffect(() => {
    getApi();
  }, []);
 console.log(res);
  return {
    getApi,
    res,
  };
};

