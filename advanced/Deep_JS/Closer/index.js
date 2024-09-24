// Closure ::
// Closure allows a function to retain access to variables from its lexical scope, even after the function has finished executing.
// In simple ways => Closure allows functions to "remember" the environment in which they were created. Today, every programming language supports closures due to their significance.

// in hinglish
/*
Closure ek programming concept hai jahan ek function ke andar ek aur function create kiya jaata hai, aur ye inner function apne surrounding scope ke variables ko access kar sakta hai, even jab outer function execute ho chuki hoti hai.

Iska matlab hai ki inner function, jo ki closure create karta hai, apne lexical scope ki variables ko "yaad" rakh sakta hai aur unka use kar sakta hai, chahe outer function execution ke baad bhi.
*/

function outer(){
    let count = 0;
    return function(){
        count += 1;
        return count;
    }
}
const counter = outer() // return function is anonymous so we assing this function into constant
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Note : Closure remember the variable which is declaired and assign in outer function

// Example II

function second(greet){                     // the second function is finished but
    setTimeout((() => {console.log(greet);  // inner function retain access due to significant of closure
    }), 1000)
}
second("Hello marya"); // Hello marya

// ### Closure Over Variables && Closures and Variable Linkage

// Closure in JavaScript does not capture values; it captures variables. This means that the closure has a reference to the variable, not a snapshot of its value at the time the closure was created.

// closure don't have access of variable's value 

let teacher = "Kyle"

let myTeacher = function(){
    console.log(teacher);
}

teacher = "Suzy"; // closure print last value of variable

myTeacher(); // Suzy

// Example IV

// Closure preserves access to variables, not values. When using var in loops, all closures share the same variable, leading to unexpected results.
// Using let in loops creates a new scope for each iteration, allowing closures to capture the correct value for each iteration.

for(var i = 1; i <= 3; i++){
    setTimeout((() => {console.log(`i : ${i}`);
    }), i * 1000)
}

// output :

// i: 4
// i: 4
// i: 4

// In a loop where var is used, all closures created within the loop will share the same variable. When the loop completes, the variable has its final value, which will be reflected when you access it in the closures.

for (let i = 1; i <= 3; i++) {
    setTimeout((() => {
        console.log(`i : ${i}`);
    }), i * 1000)
}

// output :

// i: 1
// i: 2
// i: 3

// Important !!
// "var does not allow closure to access the value of a variable as expected in a loop, while let allows closure to access the value of the variable properly in a loop."

// ### Module Pattern

// Namespace pattern vs Module pattern

// Namespace pattern : Namespace Pattern: Simply organizing functions and data into an object. This does not hide data; everything is public.

// Module pattern : Encapsulates data and functionality, hiding implementation details from the outside world. It requires closure to achieve encapsulation.

//Encapsulation: The idea of hiding data and exposing only necessary parts of an API/functions.

// Module Pattern using IIFE
const modulePattern = (function () {
    // Private variable
    let teacher = "Kyle";

    // Private function
    function ask(greet) {
        console.log(greet, teacher); // access private teacher through closure
    }
    return {
        ask : ask
        // first ask is use to access private ask method
        // second ask is reffer the private ask
    }
})();

// Usage
modulePattern.ask("Hello"); // Output: Hello Kyle
// modulePattern.teacher; // undefined, teacher is private

// The Module Pattern is a variation of the Namespace Pattern that provides encapsulation using closures.
// but Namespace not have encapsulated data

// ===============xxxxxxxxxxxxxxx Part of ES6 Module xxxxxxxxxxxxxx==============================

// ### ES6 Modules & Node.js
// ES6 modules work well in browsers but are incompatible with Node.js, which traditionally used CommonJS (require and module.exports).

// ### ES6 Modules syntax
// 1)  Named Import Syntax 
//ask.js - Module file
export default function ask(question) {
    console.log(question);
}

// main.js - Importing the named export
import ask from './ask.js'; // importing the default export and naming it 'ask'

ask("What is your name?"); // Outputs: What is your name?

// Namespace Module syntax
// workshop.js - Module file
export function greet() {
    console.log("Hello!");
}

export function farewell() {
    console.log("Goodbye!");
}

// main.js - Importing as a namespace
import * as workshop from './workshop.js'; // Importing everything under the 'workshop' namespace

workshop.greet();   // Outputs: Hello!
workshop.farewell(); // Outputs: Goodbye!

//Named Imports let you pull specific parts of a module into the current scope, while Namespace Imports collect all exports into a single object.
// Kyle prefers the Namespace Import approach









