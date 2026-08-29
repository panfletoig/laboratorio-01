const nombreInput = document.getElementById("nombre-usuario");
const edadInput = document.getElementById("edad-usuario");
const parrafo = document.getElementById("parrafo-dinamico");
const resultado = document.getElementById("resultado");

let veces = 0;

function saludar() {
    let nombre = nombreInput.value;

    if (nombre == "") {
        resultado.textContent = "Primero escribe tu nombre";
        return;
    }

    veces = veces + 1;

    // el saludo cambia segun la hora de la computadora
    let hora = new Date().getHours();
    let saludo = "Buenas noches";

    if (hora < 12) {
        saludo = "Buenos dias";
    } else if (hora < 19) {
        saludo = "Buenas tardes";
    }

    resultado.textContent = saludo + " " + nombre + ", bienvenido a mi pagina";
    parrafo.textContent = "Hola " + nombre + ", ya te salude " + veces + " veces";
}

function validarEdad() {
    let edad = parseInt(edadInput.value);

    if (isNaN(edad)) {
        resultado.textContent = "Escribe un numero en la edad";
    } else if (edad >= 18) {
        resultado.textContent = "Tienes " + edad + " años, eres mayor de edad";
    } else {
        resultado.textContent = "Tienes " + edad + " años, eres menor de edad";
    }
}

document.getElementById("btn-saludar").addEventListener("click", saludar);
document.getElementById("btn-edad").addEventListener("click", validarEdad);

document.getElementById("btn-color").addEventListener("click", function () {
    document.body.classList.toggle("otro-color");
});

nombreInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        saludar();
    }
});
