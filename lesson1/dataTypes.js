/**
 - Concept of Data Types
    - JavaScript evaluates expressions from left to right
    - when adding a number and a string , JS will treat number as a string
 - JavaScript Types are Dynamic
    - The same variable can be used to hold different data types
 - Data Types
    - Strings
      - can use single quote or double quote
      - use single quote inside double quote or otherwise
    - Numbers
      - decimals or not decimals
      - can be extra large or extra small number with exponential notation
    - Boolean
      - return value true or false
      - boolean often use to comparison 
    - Array
      - use bracket & separated by commas
      - have index, start index = 0
    - Object
      - use curly brackets & separated by commas
      - have key is property, name is value
 - typeOf Operator
    - find the type of variable
 - Undefined Value & empty Value
    - undefined => variable just declare and can assign value undefined too
    - empty value => empty string have value and type 
 */

//  JavaScript evaluates expressions from left to right
let x = 16 + "valve";
console.log(x); // 16valve

// when adding a number and a string , JS will treat number as a string
let y = "valve" + 20 + 40;
console.log(y); // valve2040

// JavaScript Types are Dynamic
let z;
z = 10;
z = "dicky";
console.log(z); // dicky

// Strings
let carName1 = "Toyota";
let carName = "'Toyota and Avanza' is car company distribution for people";
console.log(carName); // 'Toyota and Avanza' is car company distribution for people

// Number
let x1 = 30.0; // decimals
let x2 = 50; // without decimals
// extra large or extra small numbers with exponential notation
let x3 = 30e3; // 30000
let x4 = 30e-3; // 0.03

// Booleans
let ten = true;
let five = false;

// arrays
const cars = ["toyota", "mercedes", "ferrari"];

// objects
const obj = {
  firstName: "dicky",
  lastName: "al fattah",
  age: 20,
};

// typeof operator
console.log(typeof "Dicky"); // string

// Undefined
let cars; // value & type is undefined
let cars = undefined; // can be setting

// empty values
let another = ""; // empty string
