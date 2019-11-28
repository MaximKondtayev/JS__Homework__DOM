// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.


let WindowOpen = document.getElementById("WindowOpen");
let modal = document.getElementsByClassName("modal")[0];
let WindowClose = document.getElementById("WindowClose");

WindowOpen.addEventListener("click", Open);
WindowClose.addEventListener("click", Close);


function Open() {
    modal.style.display = "block";
}
function Close() {
    modal.style.display = "none";

}
