let $ = document;
let shoppingCart = [];
let allBooks = [];
let productCardContainer = $.querySelector(".product-card-container");
let shopCartContainer = $.querySelector(".basket-item");
let totalPriceElem = $.querySelector(".total-price");
let cartEmptyMess = $.querySelector(".empty-message");
let pageItemnext = $.querySelector(".next-page-item");
let previousPaginationBtn = $.getElementById("preBtn");
let nextPaginatioBtn = $.getElementById("nxtBtn");
let searchInput = $.querySelector(".search-input");
let searchBtn = $.getElementById("search-btn");
let aboutUs = $.querySelector(".about-us");
let currentPage = 1;
let rowCount = 6;

//Fetch and display products

function fetchAndDisplayProducts() {
  fetch("https://openlibrary.org/subjects/fiction.json?limit=26")
    .then((res) => res.json())
    .then((data) => {
      allBooks = data.works;
      displayProducts(allBooks, productCardContainer, currentPage, rowCount);
      setupPagination(allBooks, pageItemnext, rowCount);
    })
    .catch((error) => console.log("Error fetching data:", error));
}
fetchAndDisplayProducts();

//Generate Products List
function displayProducts(
  allBooks,
  productCardContainer,
  currentPage,
  rowCount
) {
  productCardContainer.innerHTML = "";

  let endIndex = currentPage * rowCount;
  let startIndex = endIndex - rowCount;

  let paginatedProduct = allBooks.slice(startIndex, endIndex);

  paginatedProduct.forEach(function (product) {
    const title = product.title;
    const description = product.description || "No description available";
    const price = product.edition_count; // Example price
    const src = product.cover_id
      ? `https://covers.openlibrary.org/b/id/${product.cover_id}-L.jpg`
      : "path/to/default-cover.jpg";
    const productKey = product.key; // Use the product key directly

    productCardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card product-card mb-3"><div class="row g-0"><div class="col-md-4"><img src="${src}" class="img-fluid rounded-start card-img product-card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">${title}</h5><h6 class="card-subtitle mb-3 mt-3 text-body-secondary">${price}$</h6><p class="card-text">${description}</p><button class="btn btn-card" onclick="addProductToCart('${productKey}')" type="submit">add to cart</button> <button class="btn btn-card" type="submit"><a href="components/product-details.html?id=${productKey}">See More ...</a></button></div></div></div></div>`
    );
  });
}

//Create Modal
let modal =
  '<div class="modal fade" id="myModal" tabindex="-1"aria-labelledby="exampleModalLabelaria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-sm "><div class="modal-content"><div class="modal-header p-5"><h5 class="modal-title" id="exampleModalLabel">Product Has Been Already Added</h5><button type="button" class="btn-close btn-close-white close " data-bs-dismiss="modal"aria-label="Close"></button></div></div></div></div>';
$.body.insertAdjacentHTML("beforeend", modal);
function openModal() {
  let myModal = new bootstrap.Modal(document.getElementById("myModal"), {
    keyboard: false,
    focus: true,
  });
  myModal.show();
}

//Add product to cart
function addProductToCart(productKey) {
  //Return the product that have the same ID as the selected product
  let selectedProduct = allBooks.find((product) => product.key === productKey);
  console.log("selectedPro:", selectedProduct);

  if (!selectedProduct) {
    console.error(`Product with ID ${productKey} not found.`);
    return;
  }
  //Check selected product is in cart or not
  let hasProduct = shoppingCart.some((product) => product.key === productKey);
  if (hasProduct) {
    openModal();
  } else {
    selectedProduct.count = 1; // Initialize the count property
    shoppingCart.push(selectedProduct);
    console.log("shopcart", shoppingCart);
    cartProductGenerator(shoppingCart);
    calTotalPrice(shoppingCart);
  }
}

//Generate Shopping Cart(Basket)
function cartProductGenerator(allBooksArray) {
  shopCartContainer.innerHTML = "";
  cartEmptyMess.innerHTML = "";
  allBooksArray.forEach(function (product) {
    let content = `<ol class="list-group shop-cart p-2"><li class="list-group-item shop-cart-item d-flex justify-content-between align-items-center pb-3">  <div class="product-details d-flex align-items-center"><div class="product-title" >${product.title}</div></dive><span class="product-price">${product.edition_count}$</span><span  class="product-count">${product.count}</span></div><div class="product-actions d-flex align-items-center"><i class="fa fa-trash-o delete" onclick="removeProduct('${product.key}')"></i><i class="fa fa-plus plus"  onclick="productCount('${product.key}')"></i></div></li></ol>`;

    shopCartContainer.insertAdjacentHTML("beforeend", content);
  });
}

//remove selected product
function removeProduct(productKey) {
  //Update new value for shopping cart
  shoppingCart = shoppingCart.filter(
    (product) =>
      //Returns all products that do not have the same ID as the selected product
      product.key !== productKey
  );
  allBooks.forEach((product) => {
    product.count = 1;
  });
  //Update the UI
  cartProductGenerator(shoppingCart);
  calTotalPrice(shoppingCart);
  console.log(shoppingCart);
}

//Remove All products

function removeAllProducts() {
  shoppingCart = [];
  allBooks.forEach((product) => {
    product.count = 1;
  });
  cartProductGenerator(shoppingCart);
  totalPriceElem.innerHTML = "Total Price";
  cartEmptyMess.innerHTML = "No Item!";
}

//Update quantity of product
function productCount(productKey) {
  let selectedPro = shoppingCart.find((product) => product.key === productKey);
  if (selectedPro) {
    selectedPro.count++; // Increment the count of the product
    cartProductGenerator(shoppingCart); // Update the UI
  }
  calTotalPrice(shoppingCart);
}

//Calculate total price

function calTotalPrice(allBooksArray) {
  let totalPrice = 0;

  allBooksArray.forEach((product) => {
    totalPrice += product.edition_count * product.count;
    console.log(product.count);
  });

  totalPriceElem.innerHTML = "Total Price: " + " " + totalPrice;
  console.log(totalPriceElem);
}

//Pagination

// update pagination buttons dynamically
function setupPagination(allBooks, pageItemnext, rowCount) {
  let pageCount = Math.ceil(allBooks.length / rowCount);

  for (let i = 1; i < pageCount + 1; i++) {
    paginationBtnGenerator(i);
  }
}
//handle page navigation

function paginationBtnGenerator(page) {
  let paginationBtn =
    '<li class="page-item page-item-num " onclick="changePage(' +
    page +
    ')"><a class="page-link" href="#">' +
    page +
    "</a></li>";
  pageItemnext.insertAdjacentHTML("beforebegin", paginationBtn);

  let paginationButton = document.querySelector(".page-item-num");
  if (page === 1) {
    paginationButton.classList.add("active"); //Add active class to first page
  }
}

//change the current page and update the displayed products
function changePage(page) {
  currentPage = page;
  displayProducts(allBooks, productCardContainer, currentPage, rowCount);
  updatePaginationBtnState();
}

//Add active class to All current page buttons
function updatePaginationBtnState() {
  let paginationButton = document.querySelectorAll(".page-item-num");
  paginationButton.forEach((button) => {
    let pageNumber = parseInt(button.textContent);
    if (pageNumber === currentPage) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

//activate next button

nextPaginatioBtn.addEventListener("click", () => {
  let pageCount = Math.ceil(allBooks.length / rowCount);

  currentPage++;
  if (currentPage > pageCount) {
    currentPage = 1; //navigate to first page
  }
  displayProducts(allBooks, productCardContainer, currentPage, rowCount);
  updatePaginationBtnState();
});

//activate previous button
previousPaginationBtn.addEventListener("click", () => {
  let pageCount = Math.ceil(allBooks.length / rowCount);

  currentPage--;
  if (currentPage === 0) {
    currentPage = pageCount; //navigate to last page
  }
  displayProducts(allBooks, productCardContainer, currentPage, rowCount);
  updatePaginationBtnState();
});
displayProducts(allBooks, productCardContainer, currentPage, rowCount);
setupPagination(allBooks, pageItemnext, rowCount);

//Handle Product Search
searchBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the form from submitting in the traditional way

  handleProductSearch();
});

function handleProductSearch() {
  let searchTerm = searchInput.value.trim().toLowerCase(); //trim() remove unnecessary spaces
  if (!searchTerm) {
    alert("Please enter a product name.");
    return;
  }

  let productDetailedPart = allBooks.find(
    (product) => product.title.toLowerCase() === searchTerm.toLowerCase()
  );

  if (productDetailedPart) {
    // Navigate to the product details page with the product ID in the query string
    //${productDetailedPart.id} passing product id to product-details.html page.
    location.href = `components/product-details.html?id=${productDetailedPart.id}`;
    searchInput.value = "";
  } else {
    alert("Product not found.");
  }
}
