export async function deleteClient(url: string, id?: string) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      console.log("Cliente eliminado con éxito.");
    } else if (response.status === 404) {
      console.error("No se encontró el cliente.");
    } else {
      console.error("Error al eliminar el cliente.");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
}
