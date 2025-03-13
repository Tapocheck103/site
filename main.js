let direction = 1; // 1 - вниз, -1 - вверх

function moveNoButton() {
    let button = document.getElementById("no");
    let step = 150; // Расстояние движения 150 пикселей
    
    // Получаем текущее положение кнопки относительно родителя
    let currentTop = parseInt(button.style.top) || 0;
    
    // Если кнопка еще не поднималась выше, поднимаем её дополнительно
    if (!button.dataset.extraRaised) {
        button.style.top = `${currentTop - 100}px`; // Дополнительно поднимаем на 100 пикселей
        button.dataset.extraRaised = "true";
        return; // Выходим, чтобы избежать двойного срабатывания
    }
    
    let newY = currentTop + step * direction;
    
    // Меняем направление движения при каждом вызове
    direction *= -1;
    
    // Ограничиваем, чтобы кнопка не выходила за границы экрана
    if (newY < 0) newY = 0;
    if (newY > window.innerHeight - button.offsetHeight) newY = window.innerHeight - button.offsetHeight;
    
    button.style.top = `${newY}px`;
}

function showThankYou() {
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
});
