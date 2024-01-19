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
