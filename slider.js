document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const images = gallery.querySelectorAll("img");
  const prevButton = gallery.querySelector(".prev");
  const nextButton = gallery.querySelector(".next");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});
