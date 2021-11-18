/**
 JS Arithmetic Operators
  - a typical arithmetic operation operates on two numbers
  - Operators and Operands
    - Operands => the number 
    - operators => the operations
  - Operator Precedence
    - JS automatically use hing precedence like multiplication or division
    - can focus on addition and subtraction using parentheses ()
 
 JS Assignment Operators
  - Operators Assign values to JS Variable
 
 JS String Operators
  - Use + operator to add string(concate)
  - adding number and string will return a string 

 */
let x = 10;
let y = 20;

// Adding
let add = x + y; // 30

// Substracting
let subs = y - x; // 10

// Multiplying
let mult = x * y; // 200

// Dividing
let divide = y / x; // 2

// Remainder
let mod = y % x; // 0

// Increment
x++; // 11

// Decrementing
x--; // 6

// Exponentiation
let expo = x ** 2; // 100
let pow = Math.pow(x, 2); // 100

// Operator Precedence
let precedence = (200 + 5) * 3;
console.log(precedence);

// Assignment operator
let assign = 10;

// add value
assign += 20; // 30

// substract value
assign -= 10; // 20

// multiplies value
assign *= 5; // 100

// divides value
assign /= 10; // 10;

// remainder value
assign %= 5; // 0

// String Operators
let text1 = "Dicky";
let text2 = "Al Fattah";
// Operator +
let text3 = text1 + " " + text2; // Dicky AL Fattah

// Operator +=
text1 += " " + text2; // Dicky Al Fattah
console.log(text1);
