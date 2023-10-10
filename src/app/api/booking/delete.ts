export async function deleteReservation(url: string) {
 // Reemplaza "/api/reservations" con la URL correcta de tu servidor  
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        console.log("Reservación eliminada exitosamente.");
        window.location.reload();
      } else {
        console.error("Error al eliminar la reservación.");
      }
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  }
  