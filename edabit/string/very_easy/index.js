// Quetion 1 : A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(a){
    return a.concat(" ", "Edabit");
}

console.log(nameString("Mubashir"));
console.log(nameString("kaifAbdullah"));

// Quetion 2 : Create a function that takes a boolean variable flag and returns it as a string.
function boolString(value){
    return value.toString();
}

console.log(boolString(123));
console.log(boolString(true));

// Quetion 3 : Create a function that will handle simple math expressions. The input is an expression in the form of a string.

function calculator(str){
    return toNumber(str)
}

console.log("10+4");
console.log("8-4");




