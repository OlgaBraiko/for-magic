//
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu li");
  const dropdown = document.querySelector(".dropdown");

  // Скрываем выпадающий список по умолчанию
  dropdown.style.display = "none";

  // Отображаем выпадающий список при наведении на третий пункт меню
  menuItems[2].addEventListener("mouseover", function () {
    dropdown.style.display = "block";
  });

  // Скрываем выпадающий список при уходе курсора с третьего пункта меню
  menuItems[2].addEventListener("mouseout", function () {
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

  const currentItem = gridItems[currentIdx];
  const rect = currentItem.getBoundingClientRect();

  // Перемещаем кнопку в центр текущей фотографии
  scrollBtn.style.top = rect.top + rect.height / 2 + "px";
  scrollBtn.style.left = rect.left + rect.width / 2 + "px";
});

// скролл к услугам
document.addEventListener("DOMContentLoaded", function () {
  let scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let targetPosition = window.scrollY + 1200;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Добавляем плавную анимацию
      });
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

// Показываем первое изображение при загрузке страницы
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
