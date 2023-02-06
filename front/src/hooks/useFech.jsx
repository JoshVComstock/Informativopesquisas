
import { useState,useEffect } from "react";

const useFech = async (ruta) => {
  const [resJson, setResJson] = useState({});
  const [loading, setLoading] = useState(true);

  const callAPI = async () => {
    const response = await ruta();
    const json = await response?.json();
    setResJson(json);
    setLoading(false);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return {
    callAPI,
    resJson,
    loading,
  };
};

export default useFech;
