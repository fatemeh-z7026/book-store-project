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
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 3,
    title: "Jumps In",
    src: "assets/images/jumps injpg.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 4,
    title: "Our Moon",
    src: "assets/images/our moon.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 5,
    title: "Entanglad Life",
    src: "assets/images/entangled life.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 6,
    title: "Bear",
    src: "assets/images/bear.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
];

let shoppingCart = [];
let $ = document;
let productCardContainer = $.querySelector(".product-card-container");
let shopCartContainer = $.querySelector(".basket-item");

allProducts.forEach(function (product) {
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

function addProductToCart(productId) {
  let selectedProduct = allProducts.find(function (product) {
    return product.id === productId;
  });

  shoppingCart.push(selectedProduct);
  cartProductGenerator(shoppingCart);
  console.log(shoppingCart);
}

function cartProductGenerator(allProductsArray) {
  shopCartContainer.innerHTML = "";
  allProductsArray.forEach(function (product) {
    shopCartContainer.insertAdjacentHTML(
      "beforeend",
      '<ol class="list-group shop-cart p-2"><li class="list-group-item shop-cart-item d-flex justify-content-between align-items-center pb-3">' +
        product.title +
        '<span class="product-price">' +
        product.price +
        '$</span><span class="product-count">' +
        product.count +
        '</span><i class="fa fa-trash-o delete" ></i><i class="fa fa-plus plus"></i></li></ol>'
    );
  });
}

