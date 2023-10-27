let colorSeleccionado = null;

window.onload = () => {
    let btn_1 = document.getElementById("btn-1");

    btn_1.addEventListener("click", () => {
        limpiar();
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

    return `rgb(${red}, ${green}, ${blue})`;
}

function generarColores(num) {
    let seccionColores = document.querySelector('.colores');
    let colorDivs = [];

    for (let i = 0; i < num; i++) {
        const color = randomColor();
        let div = document.createElement("div");
        div.style.backgroundColor = color;
        colorDivs.push(color); // Almacenar el color en un arreglo, porque seleccionaba el ultimo color siempre
        div.addEventListener("click", () => comprobarColor(color));
        seccionColores.appendChild(div);
    }
    colorSeleccionado = colorDivs[Math.floor(Math.random() * num)];
}

function nivelFacil() {
    generarColores(3);
    iniciarJuego();
}

function nivelDificil() {
    generarColores(6);
    iniciarJuego();
}

function comprobarColor(colorDiv) {
    if (colorDiv === colorSeleccionado) {
        alert("¡Adivinaste el color!");
        iniciarJuego();
    } else {
        console.log("Intenta de nuevo");
    }
}

function limpiar() {
    let limpiar_colores = document.querySelector(".colores");

    limpiar_colores.innerHTML = "";

    document.getElementById("rgb").textContent = "rgb( );";
}

function iniciarJuego() {
    if (colorSeleccionado !== null) {
        document.getElementById("rgb").textContent = colorSeleccionado;
    } else {
        document.getElementById("rgb").textContent = "rgb( );";
    }
}
