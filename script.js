// Добавляем обработчик события клика на кнопку
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Узнать больше";
    button.onclick = function() {
        alert("Ближневосточный барсук - это очень интересное животное!");
    };
    document.body.appendChild(button);
});
