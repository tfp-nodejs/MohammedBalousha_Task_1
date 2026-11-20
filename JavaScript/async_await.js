async function fetchPost() {
      
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON into a JavaScript object
    console.log("Response Data:", data);
    return data;
  }catch (error) {
    console.error("Request Failed:", error);
  }
}
fetchPost();