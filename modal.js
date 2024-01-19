document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("modal").style.display = "block";
  }, 5000);

  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close");

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  const phoneForm = document.getElementById("phoneForm");
  phoneForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phoneNumber").value;
    // Отправка данных на сервер или другая логика
    console.log("Номер телефона:", phoneNumber);
    modal.style.display = "none";
  });
});

document
  .getElementById("openModalButton2")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "flex";
  });

document.getElementById("callMeButton").addEventListener("click", function () {
  var phoneNumber = document.getElementById("phoneNumber").value;
  // Здесь можно добавить код для отправки номера телефона на сервер или другую обработку
  alert("Мы перезвоним вам по номеру " + phoneNumber);
});

document.addEventListener("DOMContentLoaded", () => {
  const workLink = document.getElementById("work-link");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");

  workLink.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  document
    .getElementById("phoneNumber")
    .addEventListener("input", function (e) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
});
