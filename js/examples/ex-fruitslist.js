// Ejemplo Practico para condiciones (switch)

let expr = "Uva";

switch (expr) { // switch se puede decir que es como un ===
    case "Naranjas":
        console.log("Las naranjas cuestan $2000 el kilo");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $4000 el kilo");
        break;
    case "Bananos":
        console.log("Las bananos cuestan $3000 el kilo");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Las papayas y los mangos cuestan $1000 el kilo"); // Validacion doble
        break;
    default:
        console.log(`Pedimos disculpas, ${expr} no esta disponible. Por favor intente con un nuevo producto.`);
}

console.log("¿Hay algo más que desees?");