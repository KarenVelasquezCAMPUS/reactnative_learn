// Tipos de Binding
    // Binding en JavaScript se refiere a cómo la palabra clave this está vinculada o asociada en una función.

// 1. Implicit Binding
    // Ocurre cuando se invoca un método de un objeto, y this se vincula al objeto que contiene el método

const person = {
    name: 'Adam',
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet(); // Output: Hello, I'm Adam
      
// 2. Explicit Binding
    // Ocurre cuando se usan métodos como call, apply, o bind para establecer explícitamente el valor de this

function greet() {
    console.log(`Hello, I'm ${this.name}`);
}

const adamName = { name: 'Adam' };
greet.call(adamName); // Output: Hello, I'm Adam
      
// 3. New Binding
    // Ocurre cuando una función se invoca con la palabra clave new, creando así un nuevo objeto y vinculando this a ese objeto

function Person(name) {
    this.name = name;
}
    
const adam = new Person('Adam');
console.log(adam.name); // Output: Adam
      
// 4. Lexical Binding
    // Ocurre cuando se utiliza this en una función dentro de otra función. En este caso, this se vincula al contexto léxico de la función exterior

const personLexical = {
    name: 'Adam',
    greet: function() {
        const innerFunction = () => {
        console.log(`Hello, I'm ${this.name}`);
        };
        innerFunction();
    }
};

personLexical.greet(); // Output: Hello, I'm Adam
      
// 5. Window Binding
    // Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador)

function showName() {
    console.log(this.name);
    }
      
window.name = 'Adam';
showName(); // Output: Adam