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
});
