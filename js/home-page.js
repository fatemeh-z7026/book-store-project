let $ = document;

document.addEventListener("DOMContentLoaded", function () {
  //Carousel
  let carouselInner = $.querySelector(".carousel-inner");
  let sliderImages = [
    {
      id: 1,
      src: "/assets/images/home-carouisel/carouisel-1.png",
    },
    {
      id: 2,
      src: "/assets/images/home-carouisel/carouisel-2.png",
    },
    {
      id: 3,
      src: "/assets/images/home-carouisel/carouisel-3.png",
    },
    {
      id: 4,
      src: "/assets/images/home-carouisel/carouisel-4.png",
    },
    {
      id: 5,
      src: "/assets/images/home-carouisel/carouisel-5.png",
    },
    {
      id: 6,
      src: "/assets/images/home-carouisel/carouisel-6.png",
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

  let categorySwiperList = [
    {
      id: 1,
      title: "Children's Books",
      src: "/assets/images/category-list/children-category.svg",
    },
    {
      id: 2,
      title: "Arts",
      src: "/assets/images/category-list/arts-category.svg",
    },
    {
      id: 3,
      title: "Biography",
      src: "/assets/images/category-list/biography-category.svg",
    },
    {
      id: 4,
      title: "Health",
      src: "/assets/images/category-list/health-category.svg",
    },
    {
      id: 5,
      title: "Fiction",
      src: "/assets/images/category-list/fiction-category.svg",
    },
    {
      id: 6,
      title: "Science",
      src: "/assets/images/category-list/science-category.svg",
    },
    {
      id: 7,
      title: "History",
      src: "/assets/images/category-list/history-category.svg",
    },
    {
      id: 8,
      title: "Business",
      src: "/assets/images/category-list/business-category.svg",
    },
  ];

  // let swiperSliderElem = document.querySelector(".swiper-slider");
  function categoriesGeneration() {
    categorySwiperList.forEach((category) => {
      
      //swiper item
      let swiperItem = document.createElement("div");
      swiperItem.classList.add("swiper-item");

      //swiper Link 

      let swiperLink = document.createElement("a");
      swiperLink.href = "#";
      swiperLink.classList.add("swiper-link");
      //swiper container

      let swiperImg = document.createElement("img");
      swiperImg.classList.add("swiper-icon");
      swiperImg.setAttribute("src", category.src);

      let swiperTitle = document.createElement("p");
      swiperTitle.classList.add("swiper-title");
      swiperTitle.innerHTML = category.title;

      swiperLink.append(swiperImg, swiperTitle);
      swiperItem.appendChild(swiperLink)
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
    src: "/assets/images/best-sellers/dark window.jpg",
    price: 20,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    title: "Lost Bookshop",
    src: "/assets/images/best-sellers/lost bookshop.jpg",
    price: 35,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..",
  },
  {
    id: 3,
    title: "Happy Girl",
    src: "/assets/images/best-sellers/a good happy girl.jpg",
    price: 5,
    count: 1,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 4,
    title: "Black Girl",
    src: "/assets/images/best-sellers/black girl.jpg",
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
