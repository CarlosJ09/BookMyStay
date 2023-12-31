export async function Reserve(url: string, reserveData: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(reserveData),
    });

    if (response.status === 201) {
      console.log("Property reserved successfully.");
    } else {
      console.error("Error occurred while reserving this property.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
