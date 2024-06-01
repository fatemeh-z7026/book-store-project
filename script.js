let $ = document;
let shoppingCart = [];
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
let allProducts = [
  {
    id: 1,
    title: "London",
    src: "assets/images/london.jpg",
    price: 30,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    title: "Rouge",
    src: "assets/images/rouge.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 3,
    title: "Chaos",
    src: "assets/images/chaos.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 4,
    title: "Secret Book",
    src: "assets/images/secret book.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 5,
    title: "Dark Window",
    src: "assets/images/dark window.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 6,
    title: "Lost Bookshop",
    src: "assets/images/lost bookshop.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 7,
    title: "Happy Girl",
    src: "assets/images/a good happy girl.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 8,
    title: "Black Girl",
    src: "assets/images/black girl.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 9,
    title: "Jumps In",
    src: "assets/images/jumps injpg.jpg",
    price: 25,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 10,
    title: "Our Moon",
    src: "assets/images/our moon.jpg",
    price: 30,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 11,
    title: "Entanglad Life",
    src: "assets/images/entangled life.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 12,
    title: "Bear",
    src: "assets/images/bear.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 13,
    title: "Time Shelter",
    src: "assets/images/time shelter.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

//Generate Products List
function displayProducts(
  allProducts,
  productCardContainer,
  currentPage,
  rowCount
) {
  productCardContainer.innerHTML = "";

  let endIndex = currentPage * rowCount;
  let startIndex = endIndex - rowCount;

  let paginatedProduct = allProducts.slice(startIndex, endIndex);
  paginatedProduct.forEach(function (product) {
    productCardContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="card mb-3"><div class="row g-0"><div class="col-md-4"><img src="' +
        product.src +
        '" class="img-fluid rounded-start card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">' +
        product.title +
        '</h5><h6 class="card-subtitle mb-3 mt-3 text-body-secondary">' +
        product.price +
        '$</h6><p class="card-text">' +
        product.description +
        '</p><button class="btn btn-card" onclick="addProductToCart(' +
        product.id +
        ')" type="submit">add to cart</button> <button class="btn btn-card"  type="submit"><a href="product-details.html?id=' +
        product.id +
        '" >See More ...</a></button></div></div></div></div>'
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
function addProductToCart(productId) {
  //Return the product that have the same ID as the selected product
  let selectedProduct = allProducts.find((product) => product.id === productId);

  //Check selected product is in cart or not
  let hasProduct = shoppingCart.some((product) => product.id === productId);
  if (hasProduct) {
    openModal();
  } else {
    shoppingCart.push(selectedProduct);
    cartProductGenerator(shoppingCart);
    calTotalPrice(shoppingCart);
  }
}

//Generate Shopping Cart(Basket)
function cartProductGenerator(allProductsArray) {
  shopCartContainer.innerHTML = "";
  cartEmptyMess.innerHTML = "";
  allProductsArray.forEach(function (product) {
    let content =
      '<ol class="list-group shop-cart p-2"><li class="list-group-item shop-cart-item d-flex justify-content-between align-items-center pb-3">  <div class="product-details d-flex align-items-center"><div class="product-title" >' +
      product.title +
      '</div></dive><span class="product-price">' +
      product.price +
      '$</span><span  class="product-count">' +
      product.count +
      '</span></div><div class="product-actions d-flex align-items-center"><i class="fa fa-trash-o delete" onclick="removeProduct(' +
      product.id +
      ')"></i><i class="fa fa-plus plus"  onclick="productCount(' +
      product.id +
      ')"></i></div></li></ol>';

    shopCartContainer.insertAdjacentHTML("beforeend", content);
  });
}

//remove selected product
function removeProduct(productId) {
  //Update new value for shopping cart
  shoppingCart = shoppingCart.filter(
    (product) =>
      //Returns all products that do not have the same ID as the selected product
      product.id !== productId
  );
  allProducts.forEach((product) => {
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
  allProducts.forEach((product) => {
    product.count = 1;
  });
  cartProductGenerator(shoppingCart);
  totalPriceElem.innerHTML = "Total Price";
  cartEmptyMess.innerHTML = "No Item!";
}

//Update quantity of product
function productCount(productId) {
  let selectedPro = shoppingCart.find((product) => product.id === productId);
  if (selectedPro) {
    selectedPro.count++; // Increment the count of the product
    cartProductGenerator(shoppingCart); // Update the UI
  }
  calTotalPrice(shoppingCart);
}

//Calculate total price

function calTotalPrice(allProductsArray) {
  let totalPrice = 0;

  allProductsArray.forEach(
    (product) => (totalPrice += product.price * product.count)
  );

  totalPriceElem.innerHTML = "Total Price: " + " " + totalPrice;
}

//Pagination

// update pagination buttons dynamically
function setupPagination(allProducts, pageItemnext, rowCount) {
  let pageCount = Math.ceil(allProducts.length / rowCount);

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
  displayProducts(allProducts, productCardContainer, currentPage, rowCount);
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
let pageCount = Math.ceil(allProducts.length / rowCount);

nextPaginatioBtn.addEventListener("click", () => {
  currentPage++;
  if (currentPage > pageCount) {
    currentPage = 1; //navigate to first page
  }
  displayProducts(allProducts, productCardContainer, currentPage, rowCount);
  updatePaginationBtnState();
});

//activate previous button
previousPaginationBtn.addEventListener("click", () => {
  currentPage--;
  if (currentPage === 0) {
    currentPage = pageCount; //navigate to last page
  }
  displayProducts(allProducts, productCardContainer, currentPage, rowCount);
  updatePaginationBtnState();
});
displayProducts(allProducts, productCardContainer, currentPage, rowCount);
setupPagination(allProducts, pageItemnext, rowCount);

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

  let productDetailedPart = allProducts.find(
    (product) => product.title.toLowerCase() === searchTerm.toLowerCase()
  );

  if (productDetailedPart) {
    // Navigate to the product details page with the product ID in the query string
    //${productDetailedPart.id} passing product id to product-details.html page.
    location.href = `product-details.html?id=${productDetailedPart.id}`;
    searchInput.value = "";
  } else {
    alert("Product not found.");
  }
}

