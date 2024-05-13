let $ = document;
let detailsContainer = $.querySelector(".details");
let backBtn = $.querySelector("#back");
let proTitle = $.querySelector("h1");
let proDesc = $.querySelector("p");
let proImage = $.querySelector("img");
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

//Generate product details part
function proDetailGenerat() {
  detailsContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="card mb-3 card-detailed"><div class="row g-0"><div class="col-md-4"><img src="' +
      productDetailedPart.src +
      '" class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">' +
      productDetailedPart.title +
      '</h5><p class="card-text">' +
      productDetailedPart.description +
      '</p><p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago<small></p></div></div></div></div>'
  );
}

//Save all location params in variable
let locationSearchParam = new URLSearchParams(location.search);

//Get Id Param
let productIdParams = locationSearchParam.get("id");

//Search  Product id in allProducts and return product that have same id with "productIdParam"
let productDetailedPart = allProducts.find(
  (product) => product.id === Number(productIdParams)
);
if (productDetailedPart) {
  proDetailGenerat();
} else {
  location.href = "http://127.0.0.1:5500/";
}

backBtn.addEventListener("click", () => {
  history.back();
});
