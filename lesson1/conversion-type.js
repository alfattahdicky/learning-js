/**
 JavaScript Type Conversion
    - Converting String to Numbers
        - can use global method is Number(), parseFloat, parseInt
        - Unary + Operator
    - Converting Numbers to Strings
        - can use global method String(), toString() ,toFixed()
    - Converting Dates to Numbers
        - use global method Number() or getTime()
    - Converting Dates to Strings
        - use global method String() or toString()
    - Converting Booleans to Numbers
        - Number() can also convert booleans to numbers
    - Converting Booleans to String
        - String() can convert booleans to strings
    - Automatic Type Convertion
        - When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
    - Automatic String Conversion
        - anomaly use toString()
 */

// Converting String to Numbers
// Number
Number("123"); // 123
Number(" "); // 0
Number("90 40"); // NaN
// parseFloat => decimal number
parseFloat("1233.5"); // 1233.5
// parseInt => integer number
parseInt("1233.5"); // 1233
// Unary Operator use + front string
// console.log(+"5"); // 5

// Converting Numbers to Strings
// String()
String(123); // "123"
// toString()
(123).toString(); // "123"

// Converting Dates to Numbers
// Number()
Number(new Date()); // 1638339336907
// getTime() 
new Date().getTime(); // 1638339336907

// Converting Dates to Strings
// String
String(new Date()); // "Wed Dec 01 2021 13:19:48 GMT+0700 (Western Indonesia Time)"
// toString
new Date().toString(); // "Wed Dec 01 2021 13:19:48 GMT+0700 (Western Indonesia Time)"

// Converting Booleans to Numbers
// Number
Number(false); // 0
Number(true); // 1

// Converting Booleans to String
String(false); // "false"
String(true); // "true"

// Automatic Type Conversion
(5 + null); // 5
("5" + null); // "5null"
("5" + 2); // "52"
("5" - 2); // 3
("5" * "2"); // 10

// Automatic String Conversion
({firstName: 'Dicky'}.toString()); // [object Object]
([1,2,3,4].toString()); // "1,2,3,4"
((123).toString()); // "123"
(true.toString()); // "true"