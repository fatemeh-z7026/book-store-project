document.addEventListener("DOMContentLoaded", function () {
  let $ = document;
  let carouselInner = $.querySelector(".carousel-inner");
  let sliderImages = [
    {
      id: 1,
      src: "assets/images/carouisel-1.png",
    },
    {
      id: 2,
      src: "assets/images/carouisel-2.png",
    },
    {
      id: 3,
      src: "assets/images/carouisel-3.png",
    },
    {
      id: 4,
      src: "assets/images/carouisel-4.png",
    },
    {
      id: 5,
      src: "assets/images/carouisel-5.png",
    },
    {
      id: 6,
      src: "assets/images/carouisel-6.png",
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
    { id: 1, title: "Children's Books", src: "assets/images/children-cat.svg" },
    { id: 2, title: "Young Adult", src: "assets/images/young-adult-cat.svg" },
    {
      id: 3,
      title: "Autobiographies",
      src: "assets/images/autobiographic-cat.svg",
    },
    { id: 4, title: "Business", src: "assets/images/business-cat.svg" },
    { id: 5, title: "Fiction", src: "assets/images/fiction-cat.svg" },
    { id: 6, title: "Comics", src: "assets/images/comics-cat.svg" },
    { id: 7, title: "Self-help", src: "assets/images/selfhelp-cat.svg" },
    { id: 8, title: "Cooking", src: "assets/images/cooking-cat.svg" },
  ];

  function categoriesGeneration() {
    let swiperSliderElem = document.querySelector(".swiper-slider");

    categorySwiperList.forEach((category) => {
      //swiper item
      let swiperItem = document.createElement("div");
      swiperItem.classList.add("swiper-item");
      //swiper container
      let swiperContainerElem = document.createElement("div");
      swiperContainerElem.classList.add("swiper-container");

      let swiperImg = document.createElement("img");
      swiperImg.classList.add("swiper-icon");
      swiperImg.setAttribute("src", category.src);

      let swiperTitle = document.createElement("p");
      swiperTitle.classList.add("swiper-title");
      swiperTitle.innerHTML = category.title;

      swiperContainerElem.append(swiperImg, swiperTitle);
      swiperItem.append(swiperContainerElem);
      swiperSliderElem.append(swiperItem);
    });
  }
  categoriesGeneration();
});
