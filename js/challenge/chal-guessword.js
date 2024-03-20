// Juego a adivinar la palabra

let palabraOculta = "javascript";
let intentos = 3;

function vereficarSuposicion(suposicion, palabraOculta) {
    if(suposicion.toLowerCase() ===  palabraOculta) {
        return true;
    }
    return false;
}

function juegarAdivinaPalabra () {
    alert("Bienvenido a jugar la palabra oculta");
    alert(`Tienes ${intentos} intentos para adivinar la palabra  oculta`);
    alert("La palabra oculta es un lenguaje de programacion");

    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra oculta");

        if (vereficarSuposicion(suposicion, palabraOculta)) {
            alert("Has adivinado la palabra");
            break;
        } else {
            intentos--;
            if(intentos > 0) {
                alert(`${suposicion} no es la palbra correcta, quedan ${intentos} intentos.`);
            } else {
                alert(`Te quedaste sin intentos, la palabra oculta era ${palabraOculta}`);
            }
        }
    }
}

juegarAdivinaPalabra();