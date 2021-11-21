/**
 JavaScript Strings
    - use single or double quotes
    - can use quotes inside a string 
    - can calculate of the string use keyword length
    - strings must be written within quotes
        - use \ before character like "", '' and \
    - breaking line for readibility avoid code lines longer than 80 characters
      - can use within a text string with single backslash(not preferred) or string addition
    - strings as objects
      - comparison string as object and string
        - Don't create string object because new keyword complicate the code and slow down execution speed
      - comparison string as object and string as object
        - comparing object in javascript return false
 */

// use single or double quotes
let single = 'Hello World';
let double = "Hello World";

// can use quotes inside a string
let str = "It's Amazing";
let str2 = 'He is called"John Doe"';

// calculate length string 
let calculate = "fdshfjalsdfhahsdfowefu".length;

// escape character 
// Incorrect 
// let txt1 = "They are called "Alien" from Galaxy";
// Correct
let text = "They are called \"Alien\" from Galaxy ";
let text1 = 'It\'s amazing';
let text2 = "Character \\ is a blackslash";

// breaking long code
// let say1 = 'Hello \ World'// not preferred method;
let say  = "Hello" 
+ " World";

// String as object
let strings = 'Dicky';
let stringObject = new String('Dicky');
let stringObject1 = new String('Dicky');

// Comparison string and object
console.log(strings == stringObject); // true
console.log(strings === stringObject); // false

// Comparison object always return false
console.log(stringObject == stringObject1); // false
console.log(stringObject === stringObject1); // false

/**
 JavaScript Template Strings
    - Back-tics Syntax
        - use backtics (``) define string
    - Quotes inside Strings
        - can use both single and double quotes inside strings 
    - Multiline Strings
    - Interpolation
        - easy way to include variables and expressions into strings
        - the method call string interpolation
    - Variable Subsitutions
    - Expression Subsitution
 */

// Back-tics syntax
let backTics = `Hello World`;

// Quotes inside strings
let quotes = `He's called "Spiderman"`;

// Multiline Strings
let multiline = `
  She is
  beatiful and
  smart
`;

// Interpolation
// Use ${} inside backtics
let x = 20;
let interpolation = `${x} called twenty`;

// Variable Subsitutions
let firstName = "Dicky";
let lastName = "Al Fattah";
let name = `${firstName} ${lastName}`;

// Expression Subsitutions
let ten = 10;
let five = 5;
let calculate = `${ten * five} called fifty`;