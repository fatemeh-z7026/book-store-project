let detailsContainer = document.querySelector(".details");
let backBtn = document.querySelector("#back");
let allBooks = [];

// Fetch books data and then generate product details
function fetchAndDisplayProducts() {
  fetch("https://openlibrary.org/subjects/fiction.json?limit=26")
    .then((res) => res.json())
    .then((data) => {
      allBooks = data.works;
      generateProductDetails();
    }).catch((error)=>console.error('Error fetching data:', error))
}
fetchAndDisplayProducts();

// Save all location params in variable
let locationSearchParam = new URLSearchParams(location.search);

// Get Id Param
let productIdParams = locationSearchParam.get("id");
console.log("Product ID:", productIdParams);

// Generate product details part
function generateProductDetails() {
  console.log(allBooks);
  // Search product id in allBooks and return the product that has the same id as "productIdParam"
  let productDetailedPart = allBooks.find(
    (product) => product.key === `${productIdParams}`
  );
  console.log("productDetailedPart:", productDetailedPart);

  if (productDetailedPart) {
    detailsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card mb-3 card-detailed">
        <div class="row g-0">
          <div class="col-4">
            <img src="${
              productDetailedPart.cover_id
                ? `https://covers.openlibrary.org/b/id/${productDetailedPart.cover_id}-L.jpg`
                : "path/to/default-cover.jpg"
            }" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">${productDetailedPart.title}</h5>
              <p class="card-text">${
                productDetailedPart.description
                  ? productDetailedPart.description
                  : "No description available"
              }</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>`
    );
  } else {
    alert("Product not found.");
  }
}

backBtn.addEventListener("click", () => {
  history.back();
});
