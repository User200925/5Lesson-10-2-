
// Запрашиваем имя у пользователя
const name = prompt("Введите ваше имя:");
// Создаем новый элемент div
const newDiv = document.createElement("div");

// Добавляем текстовое содержимое в новый элемент
newDiv.textContent = `Привет, ${name}!`;

// Добавляем класс для стилизации
newDiv.classList.add("styled");

// Добавляем новый элемент в DOM
document.body.appendChild(newDiv);

// Также можно использовать prepend для добавления элемента в начало
// document.body.prepend(newDiv);