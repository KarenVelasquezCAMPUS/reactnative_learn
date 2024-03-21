// estructura de un objetos | Propiedad = Valor
const persona = {
    nombre: 'John',
    edad: 38,
    direccion: {
        calle: 'Calle 1',
        ciudad: 'CDMX'
    },
    
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

persona.telefono = "555-555-555";

persona.despedir = () => {
    console.log('Me despedio');
}

console.log(persona); // todo el objeto
console.log(persona.nombre); // solo un indice el objeto
persona.saludar(); // solo el metodo del objeto
console.log(persona.telefono); // indice añadido al objeto
persona.despedir(); // metodo añadido al objeto
console.log(persona.direccion.calle); // llegar a un objeto que tiene otro objeto adentro

delete persona.telefono; // eliminar un indice del objeto
delete persona.despedir; // "eliminar" un metodo de un objeto (no se puede solo se puede colocar indefinido)

console.log("eliminando..."); 
console.log(persona.telefono);
// persona.despedir();  // aparece como un error de que despedir no es una funcion y sale el indefinido

// Funcion Constructora
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Juan", "Pérez", 25); // dar datos a los parametros
persona1.nacionalidad = "Mexicano"; // añadir nuevo parametro
const persona2 = new Persona("Diego", "Lopez", 30);

Persona.prototype.saluda = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

console.log(persona1);
console.log(persona2);

persona1.saluda();
persona2.saluda();