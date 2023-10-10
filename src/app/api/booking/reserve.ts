import { Reservacion } from "@/types/Reservacion";

export async function Reserve(url: string, reserveData: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      mode: "cors",
      body: reserveData,
    });

    if (response.status === 200) {
      console.log("Property reserved successfully.");
    } else {
      console.error("Error occurred while reserving this property.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
