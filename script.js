window.onload = () => {
    let btn_1 = document.getElementById("btn-1");

    btn_1.addEventListener("click", () => {
        iniciarJuego();
        btn_2.disabled = false;
        btn_3.disabled = false;
    })

    let btn_2 = document.getElementById("btn-2");

    btn_2.addEventListener("click", () => {
        nivelFacil();
        btn_2.disabled = true;
        btn_3.disabled = true;
    })

    let btn_3 = document.getElementById("btn-3");

    btn_3.addEventListener("click", () => {
        nivelDificil();
        btn_3.disabled = true;
        btn_2.disabled = true;
    })
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `RGB(${red}, ${green}, ${blue})`;
}

function generarColores(num) {
    let seccionColores = document.querySelector('.colores');

    for (let i = 0; i < num; i++) {
        let color = randomColor();
        seccionColores.innerHTML += `<div style="background-color: ${color};"></div>`;
    }
}

function nivelFacil() {
    generarColores(3);
}

function nivelDificil() {
    generarColores(6);
}

function iniciarJuego() {
    let limpiar_colores = document.querySelector('.colores');

    limpiar_colores.innerHTML = '';

    document.getElementById("rgb").innerHTML = randomColor();

    let fondo_titulo = document.getElementById("titulo");
    fondo_titulo.style.backgroundColor = randomColor();
}

