import { customFilter } from "./utils.js";
async function fetchPost() {
      
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON into a JavaScript object
    const filteredData = customFilter(data, post => post.title.length < 25); // Filter posts with title length less than 25 characters
    console.log("posts with title length < 25 characters", filteredData);
    return filteredData;
  }catch (error) {
    console.error("Request Failed:", error);
  }
}
fetchPost();