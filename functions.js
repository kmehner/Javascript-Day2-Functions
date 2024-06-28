// UNDERSTANDING AND CREATING FUNCTIONS

/* Function Declaration, Parameters, and Return Values 
- Functions are reusable blocks of code that perform a specific task.
- Functions can take input values called parameters and return output values.

- Functions can be declared using the function keyword followed by a name and a block of code enclosed in curly braces.
- Parameters are placeholders for values that a function expects to receive when it's called. 
- The return statement specifies the value to be returned when the function is invoked. */


function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John Doe")); // Output: Hello, John Doe! 

/* SCOPES AND CLOSURES
Scope refers to the visibility of variables within a program.

Global Scope: Variables declared outside of any function are global and can be accessed from anywhere in the program.
Local Scope: Variables declared inside a function are local to that function and cannot be accessed outside of it.

Variables declared inside a function are local to that function and cannot be accessed outside of it.
Variables declared outside of any function are global and can be accessed from anywhere in the program. */

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message); // Accesses 'message' from outer scope
  }

  return inner;
}

let myFunc = outer();
myFunc(); // Outputs: Hello

/* ARROW FUNCTIONS: more concise syntax for writing functions.
Lexical this Binding: Arrow functions do not have their own this value. They inherit the this value from the surrounding code.
No Binding of arguments: Arrow functions do not have an arguments object.
Implicit return: If the function body consists of a single expression, it is implicitly returned. */

// Arrow functions allow for shorter function syntax, particularly for simple, single-line functions.
const add = (a, b) => a + b;
// Example usage of the add function
console.log(add(5, 3)); // Output: 8

/* In the example above, the arrow function inside the setInterval method preserves the this context of the obj object, 
allowing access to its properties. */

// Arrow functions with a single parameter do not require parentheses around the parameter list.
const greet = name => `Hello, ${name}!`;

