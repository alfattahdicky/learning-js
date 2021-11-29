/**
 JavaScript Object 
    - Object are variable contain many values
      - the values written as name:value pairs (name and value separated by a colon)
    - Object Definition 
      - can create object literal, spaces and line breaks are not important
    - Accessing Object Properties
      - Two Ways to access object properties
        - use [.] dot (objectName.propertyName)
        - use bracket for propertyName (objectName["propertyName"])
    - Object Methods
      - Object have methods 
      - Methods are stored in properties as function definitions
      - Accesing Object Methods
        - with () => access method call function
        - without () => access method call return function definition
    - This Keyword
      - this refers to the "owner" of the function 
 */

// Object contain many values
const obj = {
  name: 'John Doe',
  age: 22,
  score: [100, 90, 95],
}

// Object Literal
// spaces and line breaks not important
const obj1 = {firstName: 'Al', lastName: 'Fattah', age: 50}
// Or
const obj2 = {
  firstName: 'Al',
  lastName: 'Fattah',
  age: 50,
}

// Accessing Object Properties
// Two Ways
obj2.firstName; // Al
// or
obj2['firstName']; // Al

// Object Methods
// this refers to "owners" of the function
// this.name refers to property object car name
const car = {
  name: 'McLaren',
  color: 'white',
  rilis: 2020,
  text: function() {
    return this.name + ' was released in ' + this.rilis + ' with color ' + this.color;
  },
}

// Accesing Object Methods
// console.log(car.text); // call function
console.log(car.text()); // call return function