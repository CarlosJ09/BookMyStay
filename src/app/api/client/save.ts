import { Cliente } from "@/types/Cliente";

export async function saveClient(url: string, clientData: Cliente) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(clientData),
    });

    if (response.status === 201) {
      console.log("User created successfully.");
    } else {
      console.error("Error occurred while creating the user.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
