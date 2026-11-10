const canciones = [
"Persiana Americana",
"Yellow",
"Blinding Lights",
"De Música Ligera"
];
let cancionActual = 0;

function mostrarCanciones() {
    let lista = "";

    for (let i = 0; i < canciones.length; i++) {
        lista = lista + (i + 1) + ". " + canciones[i] + "<br>";
    }

    document.getElementById("lista").innerHTML = lista;

    if (cancionActual < canciones.length) {
        document.getElementById("actual").innerHTML = canciones[cancionActual];
    } else {
        document.getElementById("actual").innerHTML = "Terminó la playlist";
    }
}

function siguienteCancion() {
    if (cancionActual < canciones.length) {
        cancionActual++;
    }

    mostrarCanciones();
}

function agregarCancion() {
    let nueva = document.getElementById("nuevaCancion").value;
    let repetida = false;

    if (nueva == "") {
        document.getElementById("mensaje").innerHTML = "Escribí una canción";
        return;
    }

    for (let i = 0; i < canciones.length; i++) {
        if (canciones[i] == nuevaCancion) {
            repetida = true;
        }
    }

    if (repetida) {
        document.getElementById("mensaje").innerHTML = "Esa canción ya existe";
    } else {
        canciones.push(nueva);
        document.getElementById("mensaje").innerHTML = "Canción agregada";
        document.getElementById("nuevaCancion").value = "";
    }

    mostrarCanciones();
}

function eliminarCancion() {
    if (canciones.length > 0) {
        canciones.pop();
        document.getElementById("mensaje").innerHTML = "Última canción eliminada";
    } else {
        document.getElementById("mensaje").innerHTML = "No hay canciones para eliminar";
    }

    mostrarCanciones();
}

mostrarCanciones()