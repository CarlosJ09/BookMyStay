export async function saveClient(url: string, clientData: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: clientData,
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
