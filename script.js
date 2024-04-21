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
let totalPriceElem = $.querySelector(".total-price");

productCardContainer.innerHTML = "";
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

  let hasProduct = shoppingCart.some(function (product) {
    return product.id === selectedProduct.id;
  });
  if (hasProduct) {
    alert("product has been already added");
  } else {
    shoppingCart.push(selectedProduct);
    cartProductGenerator(shoppingCart);
  }
}

function cartProductGenerator(allProductsArray) {
  shopCartContainer.innerHTML = "";

  allProductsArray.forEach(function (product) {
    let cartProductList = $.createElement("ol");
    cartProductList.className = "list-group shop-cart p-2";

    let cartProduct = $.createElement("li");
    cartProduct.className =
      "list-group-item shop-cart-item d-flex justify-content-between align-items-center pb-3";
    cartProduct.innerHTML = product.title;

    let cartProductPrice = $.createElement("span");
    cartProductPrice.className = "product-price";
    cartProductPrice.innerHTML = product.price;

    let cartProductCount = $.createElement("span");
    cartProductCount.className = "product-count";
    cartProductCount.innerHTML = product.count;

    let cartProductDelete = $.createElement("i");
    cartProductDelete.className = "fa fa-trash-o delete";
    cartProductDelete.addEventListener("click", function () {
      removeProduct(product.id);
    });

    let cartProducrAdd = $.createElement("i");
    cartProducrAdd.className = "fa fa-plus plus inc";
    cartProducrAdd.addEventListener("click", function () {});

    cartProduct.append(
      cartProductPrice,
      cartProductCount,
      cartProductDelete,
      cartProducrAdd
    );
    cartProductList.append(cartProduct);
    shopCartContainer.appendChild(cartProductList);
  });
}

//remove selected product
function removeProduct(productId) {
  //update value of shopping cart
  shoppingCart = shoppingCart.filter(function (product) {
    //return products that their id are not the same as clicked product
    return product.id !== productId;
  });
  cartProductGenerator(shoppingCart);
  console.log(shoppingCart);
}
