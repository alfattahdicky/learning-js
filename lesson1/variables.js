/**
 JS Statement
 - Statement is instructions to be executed by a computer
 - Javascript Program is a list of programming statements
 */
var x = 5; // Statement 1
var y = 7; // Statement 2
var z = x + y; // Statement 3

/**
  JS syntax defines 2 types of values
  - Fixed Values => called Literals
    - Numbers are written with or without decimals
    - Strings are text written within double or single quotes

  - Variable Values => called Variables
    - variables used to store data values
    - use keyword var, let , const to declare variables
    - equal sign used to assign values to variables
 */
// Fixed Values
nums = 5;
strings = "Hello"; //'Hello'
console.log(strings); // Hello

// Variables values
let six; // define as a variable
six = 6; // assign values 6 to six

/**
  3 ways to declare a JS Variable
  - using var
  - using let
  - using const

  Stages in variable = Declaring, Initialization, and Assignment 
  - Declaring is creating a variable the value is undefined

  JS Identifier 
  - Names are case sensitif like (y and Y are different variables)
  - keywords js which has existed cannot be used as names
  - Names must begin with a letter
  - Names can contain letters , digits, underscores and dollar signs
 */

/* 
  Using Var 
  - one statement, many variables
  - var cannot have block scope
  - can re-Declaring 
    - re-Declaring inside a block will also redeclare the variable outside the block
  - Var hoisting to the top and can be initialized at any time
    - you can use variable before it is declared
*/
var price1 = 2000;
var price2 = 5000;
var total = price1 + price2;
console.log(total); // 7000

// Declare
var says; // value  undefined
// Assign
says = "Hello World";
console.log("Hello World"); // Hello World
// can also like
var numbers = 2500;
console.log(numbers); // numbers

// one statement, many variables
var person = "Dicky",
  age = 20,
  weight = 50;
console.log(age); // Dicky

// Var cannot have block scope
{
  var numOne = 1;
}
console.log(numOne); // 1

// Re-Declaring var
var carName = "Mclaren";
var carName;
console.log(carName); // Mclaren

// Redeclaring var inside a block will also redeclare the variable outside the block
var numberTen = 10;
// numberTen is 10;
{
  var numberTen = 2;
  // numberTen is 2
}
console.log(numberTen); // 2

// Var Hoisting
book = "JS ES12";
var book;
console.log(book); // JS ES12

/* 
  Using Let 
  - Cannot be Redeclared
  - Must be declared before use
  - Have Block Scope => variables declared inside a { } block cannot be accessed from outside the block
  - Let also hoisted to the top of the block but not initialized, before declare will result referenceError
*/

// Cannot be Redeclared
let greeting = "Selamat Pagi";
// let greeting = "Selamat Siang";
// console.log(greeting); => error been declared

// Block Scope
{
  let numTwo = 2;
}
// console.log(numTwo); cannot access

// Redeclaring Variables => inside a block will not redeclare the variable
let totalCar = 10;
{
  let totalCar = 2;
}
console.log(totalCar); // 10

// Cannot Hoisted
totalBooks = 20;
// let totalBooks = 30;
// console.log(totalBooks);

/**
  Using Const
  - cannot be redeclared, get error assignment to constatn variable
  - cannot be reassigned 
    * For Object and Arrays
      - keyword const it defines a constant reference to a value
      - like change element and property, NOT Reassign value, array and object
  - have block scope 
    - not the same declare outside the block
    - redeclare another scope is allowed
    - redeclare with var or let is not allowed if var or let write first statement
  - when use variable const 
    - cannot value change
    - declare to new array, new object, new function, new Regexp
  - cannot hoisted same behaviour variable let
 */

// Cannot be redeclared
const nameCity = "Jakarta";
// nameCity = "Bandung";
// console.log(nameCity);

// Must be Assign when they are declare
// Correct
const nameCity1 = "Bandung";
// Incorrect => get error
// const nameCity1;
// nameCity1 = 'Bandung';

// Constant array
// Correct
const arr = ["dicky", "azka", "diaz"];
arr[0] = "al"; // change value index 0
arr.push("vera"); // add value
console.log(arr); // [ 'al', 'azka', 'diaz', 'vera' ]
// InCorrect
// const arr1 = ["dicky", "vera", "diaz"];
// arr1 = ["azka", "dicky", "vera"];

// Constant object
const obj = {
  type: "Mclaren",
  year: "2021",
  color: "blue",
};
obj.color = "white"; // change color
obj.owner = "Dicky"; // add owner
// console.log(obj); // { type: 'Mclaren', year: '2021', color: 'white', owner: 'Dicky' }

// Block Scope
// redeclare a variable with const in another scope is allowed
const y = 100; // allowed
{
  const y = 3; // allowed
}
// console.log(y); // 100

// redeclare with existing var or let is not allowed in same scope
// var twenty = 20; // allowed
// const twenty = 20; // not allowed
// {
//   let twenty = 20; // allowed
//   const twenty = 20; // not allowed
// }
// {
//   const twenty = 20; // allowed
//   const twenty = 20; // not allowed
// }

// redeclare with existing const is not allowed in same scope
// const twenty = 20; // allowed
// twenty = 20; // not allowed
// var twenty = 20; // not allowed
// let twenty = 20; // not allowed
// const twenty = 20; // not allowed

// {
//   const twenty = 20; // allowed
//   twenty = 20; // not allowed
//   var twenty = 20; // not allowed
//   let twenty = 20; // not allowed
//   const twenty = 20; // not allowed
// }

// Const Hosting
// console.log(carType); // get error
// const carType = "Toyota";
