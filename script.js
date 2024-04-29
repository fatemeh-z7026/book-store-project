let allProducts = [
  {
    id: 1,
    title: "Happy Girl",
    src: "assets/images/a good happy girl.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    title: "Black Girl",
    src: "assets/images/black girl.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 3,
    title: "Jumps In",
    src: "assets/images/jumps injpg.jpg",
    price: 25,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 4,
    title: "Our Moon",
    src: "assets/images/our moon.jpg",
    price: 30,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 5,
    title: "Entanglad Life",
    src: "assets/images/entangled life.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 6,
    title: "Bear",
    src: "assets/images/bear.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 7,
    title: "Our Moon",
    src: "assets/images/our moon.jpg",
    price: 30,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 8,
    title: "Entanglad Life",
    src: "assets/images/entangled life.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 9,
    title: "Bear",
    src: "assets/images/bear.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 10,
    title: "Black Girl",
    src: "assets/images/black girl.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

let shoppingCart = [];
let $ = document;
let productCardContainer = $.querySelector(".product-card-container");
let shopCartContainer = $.querySelector(".basket-item");
let totalPriceElem = $.querySelector(".total-price");
// let paginationContainer = $.querySelector(".pagination-container");
let pageItemnext = $.querySelector(".next-page-item");
let currentPage = 1;
let rowCount = 6;

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
  console.log(paginatedProduct);
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
        ')" type="submit">add to cart</button> <button class="btn btn-card"  type="submit">See More ...</button></div></div></div></div>'
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

  allProductsArray.forEach(function (product) {
    let content =
      '<ol class="list-group shop-cart p-2"><li class="list-group-item shop-cart-item d-flex justify-content-between align-items-center pb-3">' +
      product.title +
      '<span class="product-price">' +
      product.price +
      '$</span><span  class="product-count">' +
      product.count +
      '</span><i class="fa fa-trash-o delete" onclick="removeProduct(' +
      product.id +
      ')"></i><i class="fa fa-plus plus"  onclick="productCount(' +
      product.id +
      ')"></i></li></ol>';

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

  //Update the UI
  cartProductGenerator(shoppingCart);
  calTotalPrice(shoppingCart);
  console.log(shoppingCart);
}

//Remove All products

function removeAllProducts() {
  shoppingCart = [];
  cartProductGenerator(shoppingCart);
  totalPriceElem.innerHTML = "Total Price";
}

//Update quantity of product
function productCount(productId) {
  let selectedPro = shoppingCart.find((product) => product.id === productId);
  if (selectedPro) {
    selectedPro.count++; // Increment the count of the product
    cartProductGenerator(shoppingCart); // Update the UI
  }
}

//Calculate total price

function calTotalPrice(allProductsArray) {
  let totalPrice = 0;

  allProductsArray.forEach(
    (product) => (totalPrice += product.price * product.count)
  );
  console.log(totalPrice);

  totalPriceElem.innerHTML = "Total Price: " + " " + totalPrice;
}

//Pagination

// Modify the setupPagination function to update pagination buttons dynamically
function setupPagination(allProducts, pageItemnext, rowCount) {

  let pageCount = Math.ceil(allProducts.length / rowCount);

  for (let i = 1; i < pageCount + 1; i++) {
    paginationBtnGenerator(i);
  }
  console.log(pageCount);
}
// Modify the paginationBtnGenerator function to handle page navigation
function paginationBtnGenerator(page) {
  let paginationBtn =
    '<li class="page-item " onclick="changePage(' +
    page +
    ')"><a class="page-link" href="#">' +
    page +
    '</a></li>';
  pageItemnext.insertAdjacentHTML("beforebegin", paginationBtn);
}

displayProducts(allProducts, productCardContainer, currentPage, rowCount);
setupPagination(allProducts, pageItemnext, rowCount);
// paginationBtnGenerator(page);
