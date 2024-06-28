
/* CONDITIONAL STATEMENTS: Making Decisions 
- if
- else if
- else 
*/ 

// if statement

let age = 25;

if (age >= 21) {
    console.log("Welcome to the party!");
}


/* ELSE IF and ELSE statements 
  - else if allows you to specify additional conditions to check if the initial condition is false
  - else statement acts as a catch-all, executing its block of code by default. 
*/


let time = 14;

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

/* NESTED IF STATEMENTS
  - You can nest if statements within each other to create more complex decision-making structures.

  Using if (isRaining) is a shorthand way of checking if the value of isRaining is truthy. In JavaScript, 
  any value that is not false, 0, "", null, undefined, or NaN is considered truthy.
*/

let isRaining = true;
let umbrellaAvailable = false;

if (isRaining) {
    if (umbrellaAvailable) {
        console.log("Don't forget your umbrella!");
    } else {
        console.log("It's raining, but you don't have an umbrella.");
    }
} else {
    console.log("No need for an umbrella today!");
}

/* LOOPS: REPEATING ACTIONS
  - Loops are used to execute a block of code multiple times.
  - There are three types of loops in JavaScript: for, while, and do...while.
 */

// FOR LOOP
// The for loop is used to execute a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

/*
  - The for loop consists of three parts: initialization, condition, and iteration.
  - The initialization part is executed once before the loop starts.
  - The condition is evaluated before each iteration, and if it is true, the block of code is executed.
  - The iteration part is executed after each iteration of the block of code.

  - Initialization (let i = 0): Initializes the loop variable `i` to 0.
  - Condition (i < 5): Specifies the condition for executing the loop. The loop continues as long as the condition evaluates to true.
  - Increment (i++): Increases the value of `i` by 1 after each iteration.
*/

/* WHILE LOOP
The while loop is used to execute a block of code as long as a specified condition is true.
The condition is checked before each iteration of the loop. */

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Condition (count < 5): Specifies the condition for executing the loop. 
// The loop continues as long as the condition evaluates to true.


/* DO...WHILE LOOP
The do...while loop is similar to the while loop, but the block of code is executed at least once before the condition is checked. */
let num = 0;
do {
    console.log(num);
    num++;
}
while (num < 5);

// Condition (num < 5): Specifies the condition for executing the loop. 
// The loop continues as long as the condition evaluates to true.

/* FOR ... IN LOOP
  - The for...in loop is used to iterate over the properties of iterable objects such as arrays and strings 
  and can be used to iterate over the keys of an object.
*/

const fruits = ["apple", "banana", "cherry"];
for (const fruit in fruits) {
  console.log("Fruit:", fruit);
}

// Iterable (fruits): Specifies the object to iterate over.
// Variable (fruit): Represents the key or index of the current element in the iteration.

/* NESTED LOOPS: you can nest loops within each other to create more complex iteration patterns. 
  - The inner loop is executed for each iteration of the outer loop.
*/

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`(${i},${j})`);
  }
}

// The outer loop iterates over the values 0, 1, and 2.
// The inner loop iterates over the values 0, 1, and 2 for each value of the outer loop.



