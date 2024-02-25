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

// WhatsApp;
document
  .getElementById("openModalButton2")
  .addEventListener("click", function () {
    window.location.href = "https://wa.me/79340000384";
  });
function openWorkWats() {
  window.location.href = "https://wa.me/79340000384";
}
