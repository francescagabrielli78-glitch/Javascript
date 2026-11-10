const turnos = [];
let turnoActual = 0;

function mostrarTurnos() {
    let lista = "";

    for (let i = turnoActual; i < turnos.length; i++) {
        lista = lista + (i - turnoActual + 1) + ". " + turnos[i] + "<br>";
    }

    if (lista == "") {
        lista = "No hay turnos pendientes";
    }

    document.getElementById("lista").innerHTML = lista;
    document.getElementById("cantidad").innerHTML =
        turnos.length - turnoActual;
}

function agregarTurno() {
    let nombre = document.getElementById("cliente").value;
    let repetido = false;

    for (let i = turnoActual; i < turnos.length; i++) {
        if (turnos[i] == nombre) {
            repetido = true;
        }
    }

    if (nombre == "") {
        document.getElementById("mensaje").innerHTML =
            "Ingresá un nombre";
    } else if (repetido) {
        document.getElementById("mensaje").innerHTML =
            "Ese cliente ya tiene un turno pendiente";
    } else {
        turnos.push(nombre);
        document.getElementById("mensaje").innerHTML =
            "Turno agregado";
        document.getElementById("cliente").value = "";
    }

    mostrarTurnos();
}

function atenderSiguiente() {
    if (turnoActual < turnos.length) {
        document.getElementById("atendiendo").innerHTML =
            turnos[turnoActual];

        turnoActual++;
        document.getElementById("mensaje").innerHTML = "";
    } else {
        document.getElementById("mensaje").innerHTML =
            "No hay turnos pendientes";
    }

    mostrarTurnos();
}

function cancelarUltimo() {
    if (turnos.length > turnoActual) {
        turnos.pop();
        document.getElementById("mensaje").innerHTML =
            "Último turno cancelado";
    } else {
        document.getElementById("mensaje").innerHTML =
            "No hay turnos pendientes para cancelar";
    }

    mostrarTurnos();
}

mostrarTurnos();