let $ = document;
let backBtn = $.querySelector("#back");
let proTitle = $.querySelector("h1");
let proDesc = $.querySelector("p");
let proImage = $.querySelector("img");

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
    title: "Black Girl",
    src: "assets/images/black girl.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

//Save all location params in variable
let locationSearchParam = new URLSearchParams(location.search);

//Get Id Param
let productIdParams = locationSearchParam.get("id");

//Search  Product id in allProducts and return product that have same id with "productIdParam"
let productDetailedPart = allProducts.find(
  (product) => product.id === Number(productIdParams)
);
if (productDetailedPart) {
  proTitle.innerHTML = productDetailedPart.title;
  proDesc.innerHTML = productDetailedPart.description;
  proImage.setAttribute("src", productDetailedPart.src);
} else {
  location.href = "http://127.0.0.1:5500/";
}

backBtn.addEventListener("click", () => {
  history.back();
});
