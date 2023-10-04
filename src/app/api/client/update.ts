import { Cliente } from "@/types/Cliente";

export async function updateClient(url: string, clientData: Cliente, id: string) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (response.status === 204) {
      console.log('Cliente actualizado con éxito.');
    } else if (response.status === 400) {
      console.error('Solicitud incorrecta. Verifica los datos enviados.');
    } else if (response.status === 404) {
      console.error('No se encontró el cliente.');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
}
