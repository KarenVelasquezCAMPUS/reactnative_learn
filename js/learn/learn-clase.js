// estructura de clases
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`);
    }
}

const persona1 = new Persona("Juan", 25); // dar datos a los parametros del constructor

persona1.saludar();

// Herencia 
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    emitirSonido () {
        console.log(`El animal emite un sonido`);
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); // extender de una clase constructora para hacer el uso del this despues de el
        this.raza = raza;
    }

    emitirSonido () {
        console.log(`El perro ladra`);
    }
    correr () {
        console.log(`${this.nombre} corre alegremente.`);
    }
}

const perro1 = new Perro("Pablo", "Perro", "Labrador");
perro1.correr();
perro1.emitirSonido();
console.log(perro1);

// Prototipos

Perro.prototype.nuevoMetodo = function () { // agregar un nuevo metodo a las clases o clases constructoras
    console.log("Nuevo metodo");    
}

perro1.nuevoMetodo();