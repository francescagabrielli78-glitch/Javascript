const invitados = [
    "Lucia",
    "Martina",
    "Sofia",
    "Camila",
    "Pedro"
];

const personasIngresadas = [];
const capacidadMaxima = 3;

function intentarIngresar() {
    let nombre = document.getElementById("nombre").value;
    let estaInvitado = false;
    let yaIngreso = false;

    for (let i = 0; i < invitados.length; i++) {
        if (invitados[i] == nombre ) {
            estaInvitado = true;
        }
    }

    for (let i = 0; i < personasIngresadas.length; i++) {
        if (personasIngresadas[i] == nombre) {
            yaIngreso = true;
        }
    }

    if (nombre == "") {
        document.getElementById("resultado").innerHTML =
            "Ingresá un nombre";
    } else if (!estaInvitado) {
        document.getElementById("resultado").innerHTML =
            "No estás en la lista de invitados.";
    } else if (yaIngreso) {
        document.getElementById("resultado").innerHTML =
            "Ya ingresaste al evento.";
    } else if (personasIngresadas.length >= capacidadMaxima) {
        document.getElementById("resultado").innerHTML =
            "El evento está completo. No quedan lugares.";
    } else {
        personasIngresadas.push(nombre);
        document.getElementById("resultado").innerHTML =
            "¡Bienvenido/a, " + nombre + "! Podés ingresar.";
    }

    mostrarLugares();
}

function mostrarLugares() {
    let disponibles = capacidadMaxima - personasIngresadas.length;
    document.getElementById("lugares").innerHTML = disponibles;
}

mostrarLugares();