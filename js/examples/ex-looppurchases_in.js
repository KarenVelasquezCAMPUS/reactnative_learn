// Ejemplo Practico para loop (for in) --> objetos enumarables

const listaCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

for (fruta in listaCompras) {
    console.log(fruta);
}

for (fruta in listaCompras) {
    console.log(`${fruta} : ${listaCompras[fruta]}`);
}

/* 
no funciona ya que el for of solo son para elementos iterables como strings o arrays
for (fruta of listaCompras) { 
    console.log(fruta);
} 
*/