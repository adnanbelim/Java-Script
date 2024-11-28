// generalize function

/*
Purpose of Functions: Functions help us avoid repetitive code. Instead of writing separate functions for each square (like 10 squared, 9 squared), we can create a single, reusable function.

DRY Principle: This stands for "Don't Repeat Yourself." Writing separate functions for similar tasks increases maintenance difficulty and clutter in the code.

Generalizing Functions: Instead of hardcoding values, we can create a more general function that takes an input (parameter) to compute the square.
*/

function tenSquare() {
    return 10 * 10;
}
tenSquare();


function nineSquare() {
    return 9 * 9;
}
nineSquare();

// continue create fn for other... #DRY = don't repeat yourself

function square(num) {
    return num * num; // Reusable function
}

console.log(square(10)); // Outputs: 100
console.log(square(9));  // Outputs: 81
console.log(square(8));  // Outputs: 64

// This function in general now

// higher-order functions, which can accept other functions as arguments or return functions. This further increases flexibility and reusability.

function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier; // Returns a new function
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Outputs: 15

// By using functions with parameters and exploring higher-order functions, we can write more concise, maintainable, and reusable code, adhering (palan) to the DRY(don't repeat your self) principle.

// ### repeating Functionality

// multiply by 2

function copyArrayAndMultiplyBy2(arr) {
    const output = []; // Initialize empty array
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2); // Double the element and add to output
    }
    return output; // Return the new array
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
console.log(result); // Outputs: [2, 4, 6]

// devide by two

function copyArrayAndDivideBy2(arr) {
    const op = [];
    for (let index = 0; index < arr.length; index++) {
        op.push(arr[index] / 2);
    }
    return op;
}

const myArr = [2, 4, 6];
const res = copyArrayAndDivideBy2(myArr);
console.log(res); // logs : [1,2,3]

// The function's repetitive nature violates (ullanghan) the DRY (Don't Repeat Yourself) principle.


// ### callback and high order function
// We can modify one line and we can create reusable fn see example

function reusable(arr, instruction) {
    const op = [];
    for (let i = 0; i < arr.length; i++) {
        op.push(instruction(arr[i]));
    }
    return op;
}

function mux2(input) { return input * 2 };
const res2 = reusable([2, 3, 4], mux2); // [4,6,8]

function Dev2(input) { return input / 2 };
const res3 = reusable([2, 6, 4], Dev2); // [0, 2, 1]

// Now we have to change only function, it will working as well as map

// So we use High Order fn = map

const arr1 = [1, 2, 3];
const res1 = arr1.map((e) => e * 2); // high order fn follow DRY principles
console.log(res1);

// Pair Programming (2 programmer ka milkar coding krna)

// Definition: Pair programming is a collaborative coding practice where two programmers work together at one computer.One acts as the "driver," writing the code, while the other is the "navigator," guiding the process and discussing strategies.

// Characteristics:

// Collaboration: Both programmers contribute their ideas and skills.
// Real - time feedback: The navigator can provide immediate input on the driver’s approach, leading to better solutions.
// Enhanced learning: Both partners learn from each other, improving their coding and communication skills.

