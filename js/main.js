document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("data/initialData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch initial data");
    }
    const data = await response.json();
    displayCategories(data.categories);
  } catch (error) {
    console.error("Error fetching initial data:", error);
    showErrorModal("Error fetching initial data: " + error.message);
  }
});
