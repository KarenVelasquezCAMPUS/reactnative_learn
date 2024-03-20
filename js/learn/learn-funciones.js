// 1. Pasar funciones como argumentos -> Callback

function a () {}
function b (a) {}
b (a)

// 2. Retornar funciones -> Declaración de función

function a () {
    function b () {}
    return b
}

// 3. Asignar funciones a variables -> Expresión de función

const a = function () {}

// 4. Metodos y propiedades

function a () {}
const obj = {}
a.call(obj)

// 5. Anidar funciones -> Nested functions

function a () {
    function b () {
        function c () {
        }
        c()
    }
    b()
}
a()

// 6. Almacenar funciones en objetos -> Metodo

const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage () {
        console.log("Firing")
    }
}

rocket.launchMessage(); 

// Funciones puras

// Estructura de funcion pura
function sum (a, b) {
    return a + b
}

// Side effects -> Funciones Impuras
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual