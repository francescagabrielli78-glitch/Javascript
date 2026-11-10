const mensajes = [];

function consultar(tipo) {
    if (mensajes.length + 2 > 10) {
        document.getElementById("aviso").innerHTML =
            "Llegaste al límite de mensajes. Reiniciá la conversación.";
        return;
    }

    let pregunta = "";
    let respuesta = "";

    if (tipo == "pagos") {
        pregunta = "¿Cuáles son los medios de pago?";
        respuesta = "Aceptamos tarjetas, débito y transferencias.";
    } else if (tipo == "envios") {
        pregunta = "¿Realizan envíos?";
        respuesta = "Sí, realizamos envíos a todo el país.";
    } else if (tipo == "horarios") {
        pregunta = "¿Cuáles son los horarios?";
        respuesta = "Atendemos de lunes a viernes de 9 a 18 hs.";
    } else if (tipo == "cambios") {
        pregunta = "¿Puedo realizar cambios?";
        respuesta = "Sí, aceptamos cambios y devoluciones.";
    } else {
        pregunta = "Otra consulta";
        respuesta = "No entendimos tu consulta.";
    }

    if (pregunta != "" && respuesta != "") {
        mensajes.push("Usuario: " + pregunta);
        mensajes.push("Bot: " + respuesta);
    }

    mostrarHistorial();
}

function mostrarHistorial() {
    let texto = "";

    for (let i = 0; i < mensajes.length; i++) {
        texto = texto + mensajes[i] + "<br>";
    }

    document.getElementById("historial").innerHTML = texto;
}

function reiniciar() {
    while (mensajes.length > 0) {
        mensajes.pop();
    }

    document.getElementById("aviso").innerHTML = "";
    mostrarHistorial();
}