// Duplicacion del codigo 

const personalizedMessage = () => 'Goodbye everybody !';

function Rocket (name, ownMessage) { // A este tipo de funciones es mejor que su nombre inicie por mayuscula
    this.name = name;
    this.launchMessage = () => ownMessage
}

const falcon9Rcoket = new Rocket('Falcon 9', personalizedMessage); // con arrow function no se puede utilizar la palabra new (funcion constructora en objetos)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage);

console.log(falcon9Rcoket.name);
console.log(falconHeavyRocket.launchMessage());

const RocketWithArrowFunction = (name, ownMessage) => ({ // construir un objeto por medio de una arrow function
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successful launch !';
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction);

console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.launchMessage());