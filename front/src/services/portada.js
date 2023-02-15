const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getPortada = async () => {
  try {
    const response = await fetch(`${baseUrl}principales`, {
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
export const deletePortada = async (id) =>{
  const response = await fetch(`${baseUrl}principales/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {

  }
}