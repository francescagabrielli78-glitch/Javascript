const peliculas = [
    "Shrek",
    "Interestelar",
    "Barbie",
    "El Conjuro",
    "Superbad",
    "It"
];

const generos = [
    "comedia",
    "ciencia ficcion",
    "comedia",
    "terror",
    "comedia",
    "terror"
];

function recomendar(genero) {
    let opciones = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (generos[i] == genero) {
            opciones.push(peliculas[i]);
        }
    }

    if (opciones.length == 0) {
        document.getElementById("resultado").innerHTML =
            "No hay películas de ese género";
    } else {
        let numero = Math.floor(Math.random() * opciones.length);

        document.getElementById("resultado").innerHTML =
            opciones[numero];
    }
}