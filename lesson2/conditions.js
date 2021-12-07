/**
 JavaScript Conditions
    - when you write code, you want to perform different actions for different decisions
    - condition using ocomparisons operators produce true/false(boolean) then executed
    - Conditional Statement 
      - if => block code to be executed, use specified is true
      - else => block code to be executed, if condition false then else produce true
      - else if => new block code to test, if the first condition is false
      - switch => alternative conditional statement (if else) 
          - switch expression is evaluated once
          - value of the expression is compared with the values of each case
          - if there is a match, associated block code is executed
          - if there is no match, default code block is executed
          - break keyword its breaks out of the switch block
          - switch cases use strict comparison(===) must be of the same type to match
 */

x = 6;
y = 10;
// Conditional statement if condition true
if(x < y) {
  console.log('Six'); // Six
}

// Conditional statement else condition true(all above condition false) 
if(x == y) {
  console.log('Same Number');
} else {
  console.log('Not Same Number'); // Not Same Number
}

// conditional statement else if (new condition if the first condition is false)
if(x > y) {
  console.log('six greater than ten');
} else if(x != y) {
  console.log('Six not same number ten'); // Six not same number ten
} else {
  console.log('Six less than ten');
}

// Switch (alternative condition if else)
let text;
switch(x) {
  case 8:
   text = 'Eight';
   break;
  case 10:
    text = 'Ten';
    break;
  case 6:
    text = 'Six';
    break;
  default:
    text = 'there is not any number';
}

console.log(text); // Six

// Ex: Switch
let txt;
switch(x == y) {
  case true:
    txt = 'Same a Number';
    break;
  case false:
    txt = 'Not Number';
  default:
    txt = 'Not same a Number';
}
console.log(txt); // Not same a Number

