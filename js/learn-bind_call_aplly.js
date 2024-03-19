function dogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Rex',
    owner: 'Isabella',
    address:  'Avenue 123'
}

dogGreeting.call(newHouse, newHouse.owner, newHouse.address); // Pasar datos sin agruparlos en array -> usando metodo call

const necessaryValues = [newHouse.owner, newHouse.address];
dogGreeting.apply(newHouse, necessaryValues); // Pasar datos agrupandolos en un array -> usando metodo apply

const bindingWithBind = dogGreeting.bind(newHouse, newHouse.owner, newHouse.address); // Retorna una funcion -> usando metodo bin
bindingWithBind();
// console.log(bindingWithBind); // Muestra la funcion