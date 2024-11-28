// ### Hard part version 1

// === Summery of Execution Context

// => Thread Execution : Sequence of code in which code execute line by line.
// => Memory (Local scope) : Variables and function store which are define.

// === Components of Execution Context

// => Variables: Any variables declared within the context, including those defined in the function and any outer scopes.

// => Functions: Functions defined within the context, which can be invoked while the context is active.

// => Lexical Scope: The scope that determines how variable names are resolved in nested functions.It refers to the visibility of variables based on where they are defined in the code.

// === Global vs.Local Execution Context:

// => Global Execution Context: Created when the script starts, containing all global variables and functions.
// => Local Execution Context: Created when a function is called, holding parameters and local variables.

// === Parameters and Arguments:

// Parameter: A placeholder in the function definition (e.g., inputNumber).
// Argument: The actual value passed to the function when called (e.g., 3 or 10).

// === Threading : tha language perform multiple task in one time that's called threading

// => JavaScript uses a single thread, meaning it executes one piece of code at a time, switching between contexts when functions are called. This is managed through the event loop, which allows asynchronous operations to run without blocking the main thread.

// => Threading in javascript

// Main thread => JavaScript ka main thread woh thread hai jahan sab kuch hota hai—code run karna, user interactions handle karna, aur UI ko update karna. Ismein sirf ek hi task ek samay par execute hota hai.

// Asynchronous operations => wo tasks hain jo bina main thread ko block kiye hoti hain. Iska matlab ye hai ki jab aap koi kaam shuru karte hain, jaise data ko server se fetch karna, toh JavaScript turant aage ka code execute karna shuru kar deta hai bina intezaar kiye.

// Web Workers => JavaScript ek single-threaded language hai, matlab ye ek samay par sirf ek hi task execute karta hai. Lekin jab heavy computation ya bhari tasks hote hain, tab hum Web Workers ka istemal kar sakte hain.

// Web Workers alag thread mein kaam karte hain. Iska matlab hai ki ye main thread se alag hote hain aur isliye ye main thread ko block nahi karte.
// Ye tasks ko parallel run karte hain, matlab ek hi samay par do kaam ho sakte hain.

function multiplyByTwo(inputNumber) { // Parameter
    const result = inputNumber * 2;    // Local variable
    return result;                      // Returns the value
}

const output1 = multiplyByTwo(3);      // Argument: 3
const output2 = multiplyByTwo(10);     // Argument: 10

console.log(output1); // Outputs: 6
console.log(output2); // Outputs: 20

// output 1 : create execution context for output1
// outyput2 : create again execution context for output2

// =============== Summary of Call Stack and Execution Context =================

// Thread of Execution: When a function (like multiplyByTwo) is called, the thread of execution enters that function. Once finished, it returns to the previous context(usually the global context).

// Call Stack: JavaScript uses a call stack to keep track of which function is currently running.When a function is invoked, it gets added to the stack, and when it returns, it's removed.

function mux(n){    return n * 2;   };
mux(2); // 4 => variable and return value will store in memory and run in call-stack.
mux(3); // 6 => after finish mux(2) control will be transfer to mux(3);

// after both fn execution control transfered to global();

// === Function Execution

// When you call a function, it’s pushed onto the call stack.
// When the function finishes(using the return statement), it pops off the stack, returning control to the previous function (or global context).

// Global Context: The global execution context is always at the bottom of the stack and remains there while the program is running.

// Nested Functions: If a function calls another function, the second function is added to the stack on top of the first.When the second finishes, control goes back to the first.





