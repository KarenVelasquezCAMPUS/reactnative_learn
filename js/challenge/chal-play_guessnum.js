// Juego Practico para condiciones (if)

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(
    prompt("Adivina el número secreto que hay del 1 al 10")
);

console.log(`Este es el número con el que juegas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("¡Has acertado!");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número elegido es menor, sigue intentando");
} else {
    console.log("El número elegido es mayor, sigue intentando");
} 