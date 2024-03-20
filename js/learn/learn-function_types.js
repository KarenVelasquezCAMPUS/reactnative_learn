// Tipos de funciones 

// 1. Funciones Declarativas
    // Se definen con la palabra clave function
    // Pueden ser referenciadas antes de su declaración

function suma (a, b) {
    return a + b;
}

// 2. Funciones Expresivas
    // Se asignan a variables.
    // A menudo se utilizan para asignar funciones como valores a variables

const suma = function (a, b) {
    return a + b;
};

// 3. Funciones Flecha (Arrow Functions)
    // Introducidas en ES6, proporcionan una sintaxis más concisa
    // Tienen un comportamiento ligeramente diferente con respecto al valor de this

const suma = (a, b) => a + b;

// 4. Funciones Constructoras
    // Utilizadas para crear objetos con new
    // Utilizan this para asignar propiedades al nuevo objeto

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona("Juan", 25); // Se le asignaron datos a la funcion
console.log(persona1);

// 5. Funciones de Orden Superior (Higher-Order Functions)
    // Aceptan funciones como argumentos o devuelven funciones
    // Ejemplos incluyen map, filter, reduce

// Recibe una función como argumento
function aplicarOperacionAArray(array, operacion) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
      resultado.push(operacion(array[i]));
    }
    return resultado;
  }
  
  // Función que será utilizada como argumento en la función de orden superior
  function duplicar(numero) {
    return numero * 2;
  }
  
  // Array de números
  let numeros = [1, 2, 3, 4, 5];
  
  // Utilizando la función de orden superior para aplicar la función 'duplicar' a cada elemento del array
  let resultadoDuplicado = aplicarOperacionAArray(numeros, duplicar);
  console.log(resultadoDuplicado); // Output 2, 4, 6, 8, 10 
  
  // 6. Funciones Recursivas
    // Llamadas a sí mismas durante la ejecución
    // Útiles para problemas que se pueden dividir en subproblemas más pequeños

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// 7. Funciones Anidadas (Nested Functions)
    // Definidas dentro de otra función
    // Pueden acceder a las variables de la función contenedora (closure)

function exterior() {
    let variableExterior = 'Exterior';
    function interior() {
        console.log(variableExterior);
    }
    interior();
}
exterior();

// 8. Métodos de Objeto
    //  Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto de ese objeto

const objeto = {
    metodo: function() {
        console.log('Hola desde el metodo');
    }
};

objeto.metodo();

// 9. Funciones Asincronicas
    //  Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await

async function fetchData() {
    const response = await fetch ('<https://api.example.com/data>');
    const data = await response.json();
    console.log(data);
}

// 10. Funciones Puras:
    // Dado el mismo conjunto de entradas, siempre producirán el mismo resultado sin causar efectos secundarios observables
    // No dependen de ni modifican estados externos

function suma(a, b) {
    return a + b;
}