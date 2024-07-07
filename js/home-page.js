let $ = document;

document.addEventListener("DOMContentLoaded", function () {
  //Carousel
  let carouselInner = $.querySelector(".carousel-inner");
  let sliderImages = [
    {
      id: 1,
      src: "/assets/images/carouisel-1.png",
    },
    {
      id: 2,
      src: "/assets/images/carouisel-2.png",
    },
    {
      id: 3,
      src: "/assets/images/carouisel-3.png",
    },
    {
      id: 4,
      src: "/assets/images/carouisel-4.png",
    },
    {
      id: 5,
      src: "/assets/images/carouisel-5.png",
    },
    {
      id: 6,
      src: "/assets/images/carouisel-6.png",
    },
  ];

  function generateCarousleItem() {
    sliderImages.forEach((image, index) => {
      let carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");

      // Make the first item active
      if (index === 0) {
        carouselItem.classList.add("active");
      }

      let carouselImg = document.createElement("img");
      carouselImg.setAttribute("src", image.src);
      carouselImg.classList.add("d-block", "w-100");
      carouselImg.style.borderRadius = "10px";

      carouselItem.append(carouselImg);
      carouselInner.append(carouselItem);
    });
  }
  generateCarousleItem();

  //Swiper Slider(Category)
  let categorySwiperList = [
    { id: 1, title: "Children's Books", src: "/assets/images/children-cat.svg" },
    { id: 2, title: "Young Adult", src: "/assets/images/young-adult-cat.svg" },
    {
      id: 3,
      title: "Autobiographies",
      src: "/assets/images/autobiographic-cat.svg",
    },
    { id: 4, title: "Business", src: "/assets/images/business-cat.svg" },
    { id: 5, title: "Fiction", src: "/assets/images/fiction-cat.svg" },
    { id: 6, title: "Comics", src: "/assets/images/comics-cat.svg" },
    { id: 7, title: "Self-help", src: "/assets/images/selfhelp-cat.svg" },
    { id: 8, title: "Cooking", src: "/assets/images/cooking-cat.svg" },
  ];
  // let swiperSliderElem = document.querySelector(".swiper-slider");

  function categoriesGeneration() {
    categorySwiperList.forEach((category) => {
      //swiper item
      let swiperItem = document.createElement("div");
      swiperItem.classList.add("swiper-item");
      //swiper container

      let swiperImg = document.createElement("img");
      swiperImg.classList.add("swiper-icon");
      swiperImg.setAttribute("src", category.src);

      let swiperTitle = document.createElement("p");
      swiperTitle.classList.add("swiper-title");
      swiperTitle.innerHTML = category.title;

      swiperItem.append(swiperImg, swiperTitle);
      swiperSliderElem.append(swiperItem);
    });
  }

  categoriesGeneration();
});

//Horizantal Scrolling(Swiper)
let swiperSliderElem = document.querySelector(".swiper-slider");
let isDown = false;
let startX;
let scrollLeft;

swiperSliderElem.addEventListener("mousedown", (event) => {
  isDown = true;
  event.preventDefault();
  startX = event.pageX - swiperSliderElem.offsetLeft;
  scrollLeft = swiperSliderElem.scrollLeft; //
  swiperSliderElem.style.cursor = "grabbing"; // Change cursor style
});

function handleMouseUp() {
  if (isDown) {
    isDown = false;
    swiperSliderElem.style.cursor = "grab"; // Change cursor style
  }
}

function handleMouseMove(event) {
  if (isDown) {
    event.preventDefault();
    let x = event.pageX - swiperSliderElem.offsetLeft; //Calculates the current horizontal position of the mouse
    let walk = (x - startX) * 2; // Calculate how much to scroll
    swiperSliderElem.scrollLeft = scrollLeft - walk; // Calculates the distance the mouse has moved horizontally since mousedown
  }
}
swiperSliderElem.addEventListener("mouseleave", handleMouseUp);
swiperSliderElem.addEventListener("mouseup", handleMouseUp);
swiperSliderElem.addEventListener("mousemove", handleMouseMove);

//Best Seller Card



let bestSellerBook = [
  {
    id: 1,
    title: "Dark Window",
    src: "/assets/images/dark window.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    title: "Lost Bookshop",
    src: "/assets/images/lost bookshop.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 3,
    title: "Happy Girl",
    src: "/assets/images/a good happy girl.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 4,
    title: "Black Girl",
    src: "/assets/images/black girl.jpg",
    price: 15,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];
let bestSellCardContainer = $.querySelector(".best-sell-card-container");

bestSellerBook.forEach((book) => {
  let content =
    ' <div class="col"><div class="card best-seller-card"><img src="' +
    book.src +
    '" class="card-img-top best-sell-card-img" alt="..."/><div class="card-body best-sell-card-body"><h4 class="card-title best-sell-card-title">' +
    book.title +
    '</h4><p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small><h4 class="best-sell-card-price">' +
    book.price +
    '$</h4><a href="#" class="btn btn-card btn-best-sell">Add To Cart</a></p></div></div></div>';
  bestSellCardContainer.insertAdjacentHTML("beforeend", content);
});
