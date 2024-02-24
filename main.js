document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar .menu1 > li");
  const dropdown = document.querySelector(".dropdown");

  // Отображаем выпадающий список при наведении на третий пункт меню
  menuItems[3]?.addEventListener("mouseover", function () {
    dropdown.style.display = "block";
  });

  // Скрываем выпадающий список при уходе курсора с третьего пункта меню
  menuItems[3]?.addEventListener("mouseout", function () {
    dropdown.style.display = "none";
  });
});

// scroll btn
window.addEventListener("scroll", function () {
  const scrollBtn = document.querySelector(".hover-btn");
  const gridItems = document.querySelectorAll(".grid-item");

  let currentIdx = 0;
  gridItems.forEach((item, idx) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
      currentIdx = idx;
    }
  });
});

// скролл к услугам
document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetPosition = window.scrollY + 1200;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Добавляем плавную анимацию
      });
    });
  });
});

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
document.querySelector(".gallery").addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

// Возобновить автоматическое листание при уходе мыши
document.querySelector(".gallery").addEventListener("mouseout", () => {
  intervalId = setInterval(nextImage, 3000);
});

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

document
  .querySelector(".dropdown-trigger")
  .addEventListener("click", function () {
    if (window.innerWidth <= 900) {
      window.scrollBy(0, 1300);
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });
    }
  });

// WhatsApp
document
  .getElementById("openModalButton2")
  .addEventListener("click", function () {
    window.location.href = "https://wa.me/79340000384";
  });
function openWorkWats() {
  window.location.href = "https://wa.me/79340000384";
}

// кнопка отзывы салон

document.querySelector(".feed-btn").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href =
    "https://yandex.ru/maps/org/magiya_iskusstva/1006427653/reviews/?ll=37.281546%2C55.685137&z=14";
});

document.querySelector(".feed-btn2").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href =
    "https://zoon.ru/msk/beauty/salon_krasoty_magiya_iskusstva/#reviews";
});

// звонок на номер

function callPhoneNumber() {
  const phoneNumber = "+79340000384";
  window.open("tel:" + phoneNumber);
}
//  соц сети
function openLink(url) {
  window.open(url, "_blank");
}

// дропдаун в медиа

// const dropdown = document.getElementById("dropdown1");

// document.querySelector(".burger-menu").addEventListener("click", () => {
//   if (dropdown.style.display === "none" || dropdown.style.display === "") {
//     dropdown.style.display = "block";
//   } else {
//     dropdown.style.display = "none";
//   }
// });

// window.addEventListener("click", (event) => {
//   if (
//     !event.target.matches(".burger-menu") &&
//     !event.target.matches("#dropdown1")
//   ) {
//     dropdown.style.display = "none";
//   }
// });

// document.querySelector(".burger-menu").addEventListener("click", function () {
//   const dropdown = document.querySelectorAll("dropdown1");
//   if (dropdown.style.display === "none" || dropdown.style.display === "") {
//     dropdown.style.display = "block";
//   } else {
//     dropdown.style.display = "none";
//   }
// });
