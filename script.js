window.onload = () => {
    let btn_1 = document.getElementById("btn-1");

    btn_1.addEventListener("click", () => {
        iniciarJuego();
    })
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `RGB(${red}, ${green}, ${blue})`;
}

function iniciarJuego() {
    document.getElementById("rgb").innerHTML = randomColor();
}

