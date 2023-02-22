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
export const deletePortada = async (id, callback) => {
  const response = await fetch(`${baseUrl}principales/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {
    callback();
  }

}
export const update = async (actual,callback) => {
  const response = await fetch(`${baseUrl}principales/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      titulo: actual.titulo,
      foto: actual.foto,
      descripcion: actual.descripcion,
  })});
  if(response.ok){
    callback();
  }
}
export const postPortada = async (titulo,foto,descripcion,callback) => {
  const response = await fetch(`${baseUrl}principales`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      foto: foto,
      descripcion:descripcion,
  })});
  if(response.ok){
    callback();
  }
}