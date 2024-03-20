// Identificador this

// Enlace implicito · Implicit biding
const house = { //objeto
    dogName: 'Jessie',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`);
    }
}

house.dogGreeting();

// Enlace explicito · Explicit biding
function dogGreeting () { // funcion
    console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
    dogName: 'Freya'
}

dogGreeting.call(newHouse);

function newDogGreeting (owner, address) { // funcion
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Isabella' // Sin {} ya que lo toma como un objeto

const address = {
    addressNum: 'Avenue 123'
}

const addressString = address.addressNum; // converti el objeto en un string
// console.log(addressString);

newDogGreeting.call(newHouse, owner, addressString);