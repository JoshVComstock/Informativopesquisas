
const baseUrl = import.meta.env.VITE_BACKEND_URL

export const getDetallecentro = async () => {
  try {
    const response = await fetch(`${baseUrl}detallecentros`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};