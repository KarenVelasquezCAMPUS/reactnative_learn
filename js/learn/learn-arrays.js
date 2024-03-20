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

// push()
const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

console.log(countries);

// pop()
const removedCountry = countries.pop();

console.log(countries);
console.log(removedCountry);

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