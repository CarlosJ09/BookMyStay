export async function saveComment(url: string, commentData: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(commentData),
    });

    if (response.status === 201) {
      console.log("Comment created successfully.");
      window.location.reload();
    } else {
      console.error("Error occurred while creating the comment.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
