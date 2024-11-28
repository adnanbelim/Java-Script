/*
Execution Context : We know when a function invoke then execution context will create and variable store in local memory, Once the function finishes running, this memory is deleted, meaning the function does not remember past executions.

Closure : Closure allow a function to remember it's lexical environment even the execution context is gone. This means that a function can maintain a "memory" of its previous execution, enabling it to store and access data between calls.

Applications of Closures:

Memoization: Caches results of expensive function calls to avoid recalculating them.
Design Patterns: Used in various programming patterns like modules, iterators, and maintaining state.

*/

// Closure example - remain privious value of function

function createFunction() {
    let state = false;

    return function inner() {
        if (!state) {
            console.log("Function executed!"); // Logs when function is executed
            state = true;
        } else {
            console.log("Function can only be executed once."); // Logs if executed again
        }
    };
}

const onceFunction = createFunction();
console.log(onceFunction); // Logs: "Function executed!" (first call)
console.log(onceFunction); // Logs: "Function can only be executed once." (second call)


// ### Returning Function

// Inner Function can remember Outer Function variable although outer function's execution context end.

function createFunction() {
    var num = 6; // Outer function variable

    // Inner function
    function againCreateFunction(val) {
        return val * num; // num: outer fn variable
    }

    // Return the inner function itself, not its result
    return againCreateFunction;
}

const generateFn = createFunction(); // Outer function call and Execution Context create
const resultFn = generateFn(6); // Inner Fn call with 6
console.log(resultFn); // Logs: 36 (Inner Fn access outer function variable although outer fn execution context end)

/*
Closure wo feature hai jisme ek function apne surrounding (outer) scope ko access kar sakta hai, jab wo function kisi aur function ke andar banaya gaya ho. Matlab, agar aap ek function ke andar doosra function banate hain, to inner function apne outer function ki variables ko yaad rakh sakta hai.
*/

// ### Nested Function Scope 
// inner function execution context will create in outer functiion execution context

 function increamentOuter(){
    let counter = 0;
     function increamentInner(){
        counter++;
        console.log(counter);
        
     }
     increamentInner()
}

increamentOuter(); // logs : 1




