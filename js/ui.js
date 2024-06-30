function createCategoryElement(category) {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category";

  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category.name;
  categoryDiv.appendChild(categoryTitle);

  const bookmarksContainer = document.createElement("div");
  bookmarksContainer.className = "bookmarks-container";

  category.links.forEach((link) => {
    const bookmarkDiv = document.createElement("div");
    bookmarkDiv.className = "bookmark";
    bookmarkDiv.onclick = () => {
      window.open(link.url, "_blank");
    };

    const favicon = document.createElement("img");
    favicon.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${link.url}`;
    favicon.className = "favicon";
    bookmarkDiv.appendChild(favicon);

    const screenshot = document.createElement("img");
    screenshot.src = `https://via.placeholder.com/200x150?text=Screenshot`;
    screenshot.className = "screenshot";
    bookmarkDiv.appendChild(screenshot);

    const bookmarkTitle = document.createElement("p");
    bookmarkTitle.textContent = link.title;
    bookmarkTitle.className = "bookmark-title";
    bookmarkDiv.appendChild(bookmarkTitle);

    bookmarksContainer.appendChild(bookmarkDiv);
  });

  const leftArrow = document.createElement("button");
  leftArrow.className = "arrow arrow-left";
  leftArrow.innerHTML = "&lt;";
  leftArrow.onclick = () => {
    bookmarksContainer.scrollLeft -= 200;
  };

  const rightArrow = document.createElement("button");
  rightArrow.className = "arrow arrow-right";
  rightArrow.innerHTML = "&gt;";
  rightArrow.onclick = () => {
    bookmarksContainer.scrollLeft += 200;
  };

  categoryDiv.appendChild(leftArrow);
  categoryDiv.appendChild(rightArrow);
  categoryDiv.appendChild(bookmarksContainer);

  return categoryDiv;
}

function displayCategories(categories) {
  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  categories.forEach((category) => {
    const categoryElement = createCategoryElement(category);
    container.appendChild(categoryElement);
  });
}

function showErrorModal(message) {
  const errorModalBody = document.getElementById("errorModalBody");
  errorModalBody.textContent = message;
  $("#errorModal").modal("show");
}
