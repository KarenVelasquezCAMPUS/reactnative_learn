// 1. new Array() or Array()
console.log("new Array() or Array()");

const fruits=Array('apple','banana','orange');
console.log(fruits);

const justOneNumber=Array(12);
console.log(justOneNumber); // Output 12 empty items

const number=Array(1,2,3,4,5);
console.log(number);

// 2. Array Literal Syntax
console.log("Array Literal Syntax");

const oneNumber=[4];
console.log(oneNumber);

const emptyArray=[];
console.log(emptyArray);

const sports=['soccer','tennis','rugby'];
console.log(sports);

// 3. Array Mixtos
console.log("Array Mixtos");

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
console.log("Accesing array elements");

const firstFruit=fruits[0];
console.log(firstFruit);

// Length property
console.log("Length property");

const numberOfFruits=fruits.length;
console.log(numberOfFruits);

// Mutability --> add
console.log("Mutability --> add");

fruits.push('watermelon');
console.log(fruits);

// Methods that modify original array

// push(), añade al final de array nuevos elementos 
console.log("push()");

const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

console.log(countries);

// pop(), elimina el ultimo elemeneto del array
console.log("pop()");

const removedCountry = countries.pop();

console.log(countries);
console.log(removedCountry);

// shift(), elimina el primer elemento del array
console.log("shift()");

const colors = ['yellow', 'blue', 'red'];
const removedColor = colors.shift();

console.log(colors);
console.log(removedColor);

// unshift(), añade al principio del array nuevo elemento
console.log("unshift()");

const newColors = colors.unshift('green', 'black');

console.log(colors);
console.log(newColors);

// splice(), elimina un elemento del array
console.log( "splice()");

const vegetables = ['carrot', 'brocoli', 'spinach', 'tomato'];
const removedVegetable = vegetables.splice(2,1, 'cucumber', 'onion'); // 2: elemento a eleminar (subindice), 1: cuantos elementos se van a eliminar desde el subindice declarado anteriormente

console.log(vegetables);
console.log(removedVegetable);

// reverse() , invierte el orden del array desde un indice dado
console.log("reverse()");

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();

console.log(numbers);
console.log(reversedNumbers);

// sort(), ordena los elementos del array 
console.log("sort()");

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
console.log("fill()");

const ages = [21, 35, 45, 50];
console.log(ages.fill(0, 2, 4)); // llena con 0 desde la posicion 2 hasta la 4

// Inmutability --> add (modificando el array principal)
console.log("Inmutability --> add");

const newFruits = fruits.concat(['grape','kiwi']);
console.log(newFruits);

// map(), multiplica por si mismo (o por algo especificado) cada elemento de un array 
console.log("map()");

const numbersMap = [1, 2, 3, 4, 5];
const squaredNumbersMap = numbersMap.map(num => num * num);

console.log(numbersMap);
console.log(squaredNumbersMap);

// Practical Exercise with map(): Fahrenheit to Celsius Conversion

const temperaturesFahrenheit = [32, 68, 95, 104, 212];
const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32));

console.log('Temperatures In Fahrenheit: ', temperaturesFahrenheit);
console.log('Temperatures In Celsius: ', temperaturesCelsius);

// forEach(), recorre todos los elementos del array
console.log("forEach()");

const colorsForEach = ['red', 'pink', 'blue'];
const iteratedColors = colorsForEach.forEach(color => console.log(color));

console.log(colorsForEach);
console.log(iteratedColors);

// Practical Exercise with forEach(): Sum Of Elements in an Array

const sumNewNumbers = [1, 2, 3, 4, 5];
let summary = 0;

sumNewNumbers.forEach(number => {
    summary += number;
})

console.log('Array of Numbers: ', sumNewNumbers);
console.log('Sum of Numbers: ', summary);

// filter(), filtra segun una condicion (en este caso se filtro solo los numeros pares)
console.log("filter()");

const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersFilter.filter(number => number % 2 === 0);

console.log(numbersFilter);
console.log(evenNumbers);

// reduce()
console.log("reduce()");

// suma de los elementos de un array
const numbersReduce = [1, 2, 3, 4, 5];
const sumReduce = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(numbersReduce);
console.log(sumReduce);

// calcula cuantas veces se repite la misma palabra en un array
const words = ['apple', 'banana', 'hello', 'bye', 'bye', 'bye', 'banana'];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(words);
console.log(wordFrecuency);

// Practical Exercise with filter() and reduce(): Passing Grade Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];
const passingGrades = grades.filter(grade => grade >= 70);
const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length;

console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passingGrades);
console.log('Average Passing Grade: ', averagePassingGrade);

// find(), devuelve el primer elemento de un array que cumpla con una condicion dada
console.log("find()");

const multipleOf5 = [5, 10, 15, 20];
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(multipleOf5);
console.log(firstNumberGreaterThan10);

// findIndex(), devuelve el indice del primer elemento de un array que cumpla con una condicion dada
console.log("findIndex()");

const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50);

console.log(randomNumber);
console.log(indexNumber);

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