/**
 JavaScript Numbers
    - Numbers can be written with or whitout decimals
    - 64 Bit Floating Point
      - It means format stores numbers when number/fraction its store to bit 0 - 51, exponent bits 52 - 62 and the sign bit 63
      - Integer Precision without exponent notation or period are accurate up to 15 digits
        - The Maximum number of decimals is 17
      - Floating Precision
        - not always 100% accurate
    - Adding Numbers and Strings
      - Numbers are added, strings are concatenated
      - JS Intrepreter works from left to right
    - Numeric Strings
      - JS can convert string to numbers in all operations except "+" is concatenate the strings
    - NaN (Not a number)
      - Reserved word indicating not legal number, 
      - String contains a numeric value result not NaN but number
      - Check value is not a number use function isNaN()
      - NaN is a number
    - Infinity/-Infinity
      - Number outside the largest possible number
      - Division by 0 generates Infinity
      - Infinity is a number
    - Hexadecimal
      - numeric constants as hexadecimal if you start 0x
      - never write a number with a leading zero because js version interpret numbers as octal
      - use method toString output numbers basee 2 to base 36
    - JS Numbers as Object
      - create number can be defined as objects 
      - Don't Create Number Object because "new" keyword can be complicates and slows down speed execution and can produce unexpected results
 */

// number written with or without decimals
let decimals = 1.2;
let notDecimals = 20;

// 64 Floating Point 

// Integer Precision 
let fiveteen = 999999999999999; // accurate max 15
let upfiveteen = 999999999999999999; // max 17 
console.log(fiveteen); // 999999999999999
console.log(upfiveteen); // 1000000000000000000

// Floating Precision
let floatingAdd = 0.1 + 0.2;
let fixFloatingAdd = (0.1 * 10 + 0.2 * 10) / 10;
console.log(floatingAdd); // 0.30000000000000004
console.log(fixFloatingAdd); // 0.3

// Adding Numbers and string
let tenNumber = 10;
let twentyNumber = 20;
let tenString = "10";
let twentyString = "20";

let addNumbers = tenNumber + twentyNumber; // 30
let addStrinsg = tenString + twentyString; // "1020"
let addNumberString = tenNumber + twentyString; // "1020"
let addStringNumber = tenString + twentyNumber; // "1020"
let commonMistake = tenNumber + twentyNumber + tenString; // "3010" 

// Numeric String => string ca numeric content
let division = twentyString / tenString; // 2
let multiplication = twentyNumber * tenString; // 200
let subtract = twentyNumber - tenString; // 10
// let add = twentyString + tenString; // cannot work 

// NaN Number
let resultNan = 200 / "dicky"; // NaN
// let resultNan = 200 / "20"; // cannot result NaN because string contains a numeric value
isNaN(resultNan); // check NaN is true
let addNanNumber = tenNumber + NaN; // NaN
let adNanString = tenString + NaN; // 10NaN (Concatenation)
typeof NaN; // Number


// Infinity
let two = 2;
let txt = '';
while(two != Infinity) {
  two *= two;
  txt += two;
}
txt; // execution until infinity

let divInfinity = two / 0; // Infinity
let divMinInfinity = two; // -Infinity

// hexadecimal
let hex = 0xFF; // never write a number this
let hexNum = 32;
// console.log(hexNum.toString(2)); // 10000

// Js Numbers a Object
let literalNum = 123;
let objNum = new Number(123);
let objNum2 = new Number(123);

literalNum == objNum; // true
literalNum === objNum; // false

objNum == objNum2; // false
objNum === objNum2; // false

