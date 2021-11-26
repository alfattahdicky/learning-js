/**
 JavaScript Array
    Array can hold many values under a single name and access the values by referring to an index
    - Creating Array
      - spaces and line breaks are not important
      - create array then provide the elements
    - Accessing Array Element Part 1
      - Access array by referring to the index number
      - index start with 0
    - Changing an Array Element
      - choose element change then access the index and assign value which is desired
    - Access the full array
      - you can access full array by referring to the array name
    - Arrays are Objects
      - array are a special type of objects
      - in JavaScript arrays defined objects
      - arrays use numbers to access 'its' elements
    - Array Elements Can Be Objects
      - you can have variables of different types in the same Array ex: objects, function, array
    - Array Properties and Methods
      - properties like length(return the number of elements)
      - methods like sorts(sorts the array)
    - Accessing Array Element Part 2
      - Accessing first element array use nameArray[0]
      - Accessing last array element use nameArray[nameArray.length - 1]
    - Get All Elements 
      - can get all elements with For loop 
      - can use get all elements with array method (Array.forEach)
    - Adding Array Elements
      - add new element using array method push()
      - if you addding elements with indexes the array create undefined in array
    - Associative Arrays
      - array with named indexes
      - JS doesn't support associative array 
      - In JS arrays always use numbered indexes
      - if yout use named indexes, jS redefine the array to an object
      - some array methods and properties will produces incorrect result
    - JavaScript new Array()
      - can safely use [] rather than new Array()
      - new keyword can produce some unexpected result
    - Check variable array
      - use Array.isArray()
      - use instanceof
 */

// Creating Array
const cars = ['lamborghini', 'McLaren', 'BMW'];
// or => spaces and line breaks are not important
const cars2 = [
  'lamborghini',
  'McLaren',
  'BMW'
]
// or => create array then provide the elements
const cars3 = [];
cars3[0] = 'lamborghini';
cars3[1] = 'McLaren';
cars3[2] = 'BMW';

// Accessing Array Elements Part 1
const cars5 = ['BMW', 'McLaren', 'lamborghini'];
cars5[2]; // lamborghini

// Changing an Array Element
const cars6 = ['Mclaren', 'Volvo', 'BMW'];
cars6[1] = 'lamborghini';  // lamborghini

// Access full array
const names = ['James', 'David', 'Faiz'];
// console.log(names); // [ 'James', 'David', 'Faiz' ]

// Array are Object
const names2 = ['David', 'Doe', 'James'];
names2[1]; // Doe

// Array Elements Can Be Objects
const differentType = [ 
  Date.now, 
  function says(){
    console.log('Hello World');
  },
  ['BMW', 'Lamborghini', 'Ferrari'], 
]

// Array Properties and Methods
const fruits = ['Orange', 'Apple', 'Mango', 'Banana'];
// Properties Length
fruits.length; // 4
fruits.sort() // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Accessing Array Element Part 2
const person = ['John', 32, 'Washingthon DC'];
// Access First Element
person[0]; // John
// Access Last Element
person[person.length - 1]; // Washingthon DC 

// Get All Elements
const names3 = ['John', 'Alex', 'Budi'];
// use For loop
for(let i = 0; i < names3.length; i++) {
  names3[i]; /**
  John
  Alex
  Budi
  */
}
// or use Array.forEach()
names3.forEach(function(e) {
  e;/**
  John
  Alex
  Budi
  */
});

// Adding Array element
const city = ['Tokyo', 'Miami', 'New York'];
// Push element using method array push()
city.push('Jakarta'); // ['Tokyo', 'Miami', 'New York', 'Jakarta']
city.length; // 4
// You can create undefined in array if you adding element with high indexs
city[6] = 'Bali'; 
// console.log(city); // [ 'Tokyo', 'Miami', 'New York', 'Jakarta', , , 'Bali' ]

// Associative Arrays
// Js arrays always use numbered index
const person1 = [];
person1[0] = 'al';
person1[1] = 'fattah';
person1[2] = 20;
person.length; // 3
person[0]; // al
// JS redefined the array to an object
const person2 = [];
person2['firstName'] = 'al';
person2['lastName'] = 'fattah';
person2['age'] = 20;
person.length; // 0
person[0]; // undefined

// JS new Array()
const points1 = new Array(30, 40, 10, 50);
const points2 = [30, 40, 10, 50];
points1[0]; // 30
points2[0]; // 30

// new array can unexpected result
const points3 = new Array(5);
points3; // [,,,,]

// Check variable array
const fruits3 = ['Mango', 'Banana', 'Orange'];
Array.isArray(fruits3); // true
fruit3 instanceof Array; // true