/**
 JavaScript Booleans
  Represent one of two values : true or false
  JS Booleans use operator comparisons 
    - Can use boolean built in function : Boolean()
    - Comparisons and Conditions generate boolean
    - Value is True  
      - number(integer, decimals), minus number ,string, string false, and any expression (except zero) is true
    - Value is false
      - zero, minus zero, false ,empty string, undefined, null, and NaN
    - JS Booleans can create as Objects but not recommended 
 */

// Boolean Function()
Boolean(20 < 5); // false
// or
20 < 5; // false

// Value is true(except zero)
let integer = 20;
let decimals = 30.5;
let minusInteger = -10; 
let stringText = 'Hello World';
let stringFalse = 'false';

// Value is false
let zero = 0;
let minusZero = -0;
let emptyString = '';
let valueUndefined = undefined;
let valueNull = null;
let valueFalse = false;
let valueNan = NaN;

// Booleans as Objects (not recommended)
let x = false;
let y = new Boolean(false);
let z = new Boolean(false);

x == y; // true
x === y; // false

// Comparisons object always return false
y == z; // false
y === z; // false