document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar .menu1 > li");
  const dropdown = document.querySelector(".dropdown1");

  // Отображаем выпадающий список при наведении на третий пункт меню
  menuItems[2]?.addEventListener("mouseover", function () {
    dropdown.style.display = "block";
  });

  // Скрываем выпадающий список при уходе курсора с третьего пункта меню
  menuItems[2]?.addEventListener("mouseout", function () {
    dropdown.style.display = "none";
  });
});

// скролл к услугам

document.addEventListener("DOMContentLoaded", function () {
  const scrollAbout = document.querySelector(".scroll-about");
  scrollAbout.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 3200,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollAbout = document.querySelector(".scroll-link");
  scrollAbout.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  });
});

//swipe gallery

let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery img");
const totalImages = images.length;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);

// Автоматическое листание изображений
let intervalId = setInterval(nextImage, 3000);

// Остановить автоматическое листание при наведении мыши

// Возобновить автоматическое листание при уходе мыши
// document.querySelector(".gallery").addEventListener("mouseout", () => {
//   intervalId = setInterval(nextImage, 3000);
// });

// Получаем ссылки на изображения
const images1 = document.querySelectorAll(".gallery img");

// Добавляем обработчик события для каждого изображения
images1.forEach((image) => {
  image.addEventListener("click", () => {
    // Применяем анимацию при нажатии на изображение
    image.style.transition = "opacity 0.5s ease-in-out";
    image.style.opacity = 0;
    setTimeout(() => {
      // После завершения анимации загружаем следующее изображение
      // В этом примере предполагается, что у вас есть код для загрузки следующего изображения
      // Например, вы можете изменять атрибут src у тега <img> для загрузки нового изображения
      image.style.opacity = 1;
    }, 500); // Ждем 500 миллисекунд (время анимации) перед загрузкой нового изображения
  });
});

// WhatsApp;
document
  .getElementById("openModalButton2")
  .addEventListener("click", function () {
    window.location.href = "https://wa.me/79340000384";
  });
document
  .getElementById("openModalButton1")
  .addEventListener("click", function () {
    window.location.href = "https://wa.me/79340000384";
  });
function openWorkWats() {
  window.location.href = "https://wa.me/79340000384";
}

//слайдер фоток
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
});

document.querySelector(".burger-icon").addEventListener("click", function () {
  document.querySelector(".burger-menu-content").style.display = "block";
  document.querySelector(".right-column1").style.display = "block";
  document.querySelector(".left-column1").style.display = "block";
});

window.addEventListener("click", function (event) {
  if (
    !event.target.closest(".burger-menu-content") &&
    !event.target.closest(".burger-icon")
  ) {
    document.querySelector(".burger-menu-content").style.display = "none";
    document.querySelector(".right-column1").style.display = "none";
    document.querySelector(".left-column1").style.display = "none";
  }
});

// document.querySelectorAll(".scroll").forEach((item) => {
//   item.addEventListener("click", () => {
//     window.scrollBy({
//       top: 700,
//       behavior: "smooth",
//     });
//     document.querySelector(".burger-menu").style.display = "none";
//   });
// });

document.querySelectorAll(".scroll600").forEach((item) => {
  item.addEventListener("click", () => {
    window.scrollBy({
      top: 3500,
      behavior: "smooth",
    });

    document.querySelector(".burger-menu").style.display = "none";
  });
});
document.querySelectorAll(".scroll").forEach((item) => {
  item.addEventListener("click", () => {
    window.scrollBy({
      top: 2000,
      behavior: "smooth",
    });

    document.querySelector(".burger-menu").style.display = "none";
  });
});

document.querySelector(".workout").addEventListener("click", function () {
  window.location.href = "https://wa.me/79340000384";
});

//click mapp yandex

document.querySelector(".mapp-click").addEventListener("click", () => {
  window.location.href =
    "https://yandex.ru/maps/org/magiya_iskusstva/1006427653/?ll=37.281503%2C55.686752&z=14.65";
});
