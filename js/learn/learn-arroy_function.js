// Función Tradicional
const greeting = function (name) {
    return `Hi, ${name}`;
}

// Arroy Function - Explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`;
}

// Arroy Function - Implicit return
const newGreetingImplicit = name => `Hi, ${name}`; // one parameter
const newGreetingImplicitTwoParameters = (name, lastname) => `Hi, I'm ${name} ${lastname}`; // two parameters

// Lexical Binding
const finctionalCharacter = {
    name: 'Uncle Ben',
    messageTraditionalFunction: function (message) {
        console.log(`${this.name}  says: ${message}`);
    },
    messageWithArrowFunction: (message) => { // en arrow function no es posible el uso de this (retorna un undefined)
        console.log(`${this.name}  says: ${message}`);
    }
}

finctionalCharacter.messageTraditionalFunction('With great power comes great responsability.');
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');