/**
 JavaScript Comparison and Logical Operators
    - Comparison Operators
        - Used in logical statements to determine equality or difference between variables or value
    - Logical Operators
        - used to determine the logic between variables or values
    - Conditional (Ternary) Operator
        - Also contains a conditional operator that assign as value to variable
    - Comparing Different Types
        - Can give unexpected result
        - String with a number, JS will convert the string to a number
 */

let x = 10;
let y = 20;

//  Comparison Operators
x == y; // false
x === y; // false

x != y; // true
x !== y; // true

x < y; // true
x > y; // false

x <= y; // true
x >= y; // false

// Logical Operators
(x == y && x == 10); // false
(x != y || x == y); // true
!(x == y); // true

// Ternary Operator
let number = (x < y) ? 'Ten' : 'Twenty'; // Ten

// Comparing Different Types
"5" < "10"; // true
"5" > "10"; // false
"45" == "45"; // true