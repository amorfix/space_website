document.addEventListener("DOMContentLoaded", () => {
  // Находим все кнопки вкладок и блоки с контентом
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  // Навешиваем обработчик события на каждую кнопку-вкладку
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Удаляем активный класс у всех кнопок и контента
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Добавляем активный класс нажатой кнопке
      tab.classList.add("active");

      // Находим и показываем соответствующий контент
      const contentId = tab.getAttribute("data-tab");
      const content = document.getElementById(contentId);
      content.classList.add("active");
    });
  });

  // Обработка отправки формы (без реальной отправки данных)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      // Предотвращаем стандартное поведение формы (перезагрузку страницы)
      event.preventDefault();

      // Получаем значения полей
      const nameInput = document.getElementById("name");
      const messageInput = document.getElementById("message");

      // Проверка на заполненность полей (простая валидация)
      if (nameInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Пожалуйста, заполните все поля формы");
        return;
      }

      // Имитация отправки сообщения
      alert(
        "Спасибо за ваше сообщение! Оно было бы отправлено, если бы эта форма была подключена к серверу."
      );

      // Очистка полей формы
      nameInput.value = "";
      messageInput.value = "";
    });
  }
});
