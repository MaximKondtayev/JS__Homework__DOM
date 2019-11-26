// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let light = document.createElement("section");
light.style = "width: 100px; height:156px; border: 1px black solid;";
document.body.appendChild(light);
let button = document.createElement("button");
button.innerText = "click";
document.body.appendChild(button);
button.style = "margin-top: 20px";

let lighter = {
    red: document.createElement("div"),
    yellow: document.createElement("div"),
    green: document.createElement("div"),
};
for (let key in lighter) {
    lighter[key].classList.add("circle");
    if (key == "red") {
        lighter[key].classList.add("red");
    }
}

light.appendChild(lighter.red);
light.appendChild(lighter.yellow);
light.appendChild(lighter.green);

button.setAttribute("onClick", "changeColor()");

function changeColor() {
    if (lighter.red.className == "circle red") {
        lighter.red.classList.remove("red");
        lighter.yellow.classList.add("yelow");
    }
    else if (lighter.yellow.className == "circle yelow") {
        lighter.yellow.classList.remove("yelow");
        lighter.green.classList.add("green");
    }
    else if (lighter.green.className == "circle green") {
        lighter.green.classList.remove("green");
        lighter.red.classList.add("red");
    }
}