// 1. new Array() or Array()

const fruits=Array('apple','banana','orange');
console.log(fruits);

const justOneNumber=Array(12);
console.log(justOneNumber); // Output 12 empty items

const number=Array(1,2,3,4,5);
console.log(number);

// 2. Array Literal Syntax

const oneNumber=[4];
console.log(oneNumber);

const emptyArray=[];
console.log(emptyArray);

const sports=['soccer','tennis','rugby'];
console.log(sports);

// 3. Array Mixtos

const recipeIngredients=[
    'Flour',
    true,
    2,
    {
        ingredient:'Milk',
        quantity:'1 cup'
    },
    false
];
console.log(recipeIngredients);

// Accesing array elements
const firstFruit=fruits[0];
console.log(firstFruit);

// Length property
const numberOfFruits=fruits.length;
console.log(numberOfFruits);

// Mutability --> add
fruits.push('watermelon');
console.log(fruits);

// Methods that modify original array

// push(), añade al final de array nuevos elementos 
const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

console.log(countries);

// pop(), elimina el ultimo elemeneto del array
const removedCountry = countries.pop();

console.log(countries);
console.log(removedCountry);

// shift(), elimina el primer elemento del array
const colors = ['yellow', 'blue', 'red'];
const removedColor = colors.shift();

console.log(colors);
console.log(removedColor);

// unshift(), añade al principio del array nuevo elemento
const newColors = colors.unshift('green', 'black');

console.log(colors);
console.log(newColors);

// splice(), elimina un elemento del array
const vegetables = ['carrot', 'brocoli', 'spinach', 'tomato'];
const removedVegetable = vegetables.splice(2,1, 'cucumber', 'onion'); // 2: elemento a eleminar (subindice), 1: cuantos elementos se van a eliminar desde el subindice declarado anteriormente

console.log(vegetables);
console.log(removedVegetable);

// reverse() , invierte el orden del array desde un indice dado
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();

console.log(numbers);
console.log(reversedNumbers);

// sort(), ordena los elementos del array 
const unsortedNumbers1 = [4, 18, 1, 62, 34];
const unicodeSortedNumbers = unsortedNumbers1.sort(); // string

console.log(unsortedNumbers1);
console.log(unicodeSortedNumbers);

const unsortedNumbers2 = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b); //number

console.log(unsortedNumbers2);
console.log(sortedNumbers);

const cities = ['New York', 'Paris', 'Tokyo', 'London'];
const sortedCities = cities.sort(); // string utf-16

console.log(cities);
console.log(sortedCities);

// fill(), cambiar valores del array

const ages = [21, 35, 45, 50];
console.log(ages.fill(0, 2, 4)); // llena con 0 desde la posicion 2 hasta la 4

// Inmutability --> add (modificando el array principal)
const newFruits = fruits.concat(['grape','kiwi']);
console.log(newFruits);

// Cheking arrays with Array.isArray()
const isArray = Array.isArray(fruits);
console.log(isArray);

// Practical Exercise: summary all elements of an array
const numbersArray = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}
console.log(sum);