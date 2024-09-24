// Object Overview

// this
// new
// binding : static and dynamic binding

// ### this keyword :

// this refers to the execution context (variable, fn, laxical scope) of a function call, not the function definition itself.
// This context flexibility makes this similar to dynamic scoping, where the value depends on the calling context rather than lexical scope.

// Purpose of this :
// this provides dynamic, reusable behavior, allowing functions to be called with different contexts.

/* 
Binding ::

Binding in JavaScript refers to the way the this keyword is associated with a particular context or object when a function is called. It determines what the this keyword points to within a function during its execution. The this keyword allows functions to have dynamic context, meaning the object it references can change depending on how the function is invoked.
*/

// Four Ways to Invoke Functions: with "this"

// 1) Default Binding: When a function is called without any specific context, this refers to the global object (window in browsers) or undefined in strict mode.

var teacher1 = "kyle"
function nonContext(){
    console.log(this.teacher1); // Default binding, non-strict-mode - ACCESS global object (eg. window) OR strict-mode undefined
    // logs : kyle
}

// 2) Implicit Binding: When a function is called as a property of an object, this refers to the object itself.

let myObj = {
    name : "Kyle",
    greet : function(){
        console.log(`hello,`, this.name); // this refer object it-self
    }
};

myObj.greet(); // hello Kyle, Implicit binding, `this` refers to `myObj`

// 3) Explicit Binding: Methods like call(), apply(), or bind() allow setting this explicitly to a specified object.
// It can be hard (early) or loose (late) bind 
// hard bind => when context fix at compile-time
// loose bind => when context will be fix on run-time (function invocation)

// loose example 
let yourObj = {
    name: "Suzy"
};
function greet() {
    console.log(`hello,`, this.name); // this refer object it-self
}

greet.call(yourObj); // hello, Suzy, // Explicit binding, `this` refers to `yourObj`

// hard example
function hardBind(){
    console.log(this.name);
}
var people = {
    name : "Kyle"
}
var hardVar = hardBind.bind(people) // fix context at compile-time
console.log(hardVar); //logs : Kyle

// 4) New Binding: When a function is called with the new keyword, this refers to the newly created object.
// new keyword create a object instense.

function Person(name) {
    this.name = name;
}

const newName = new Person('John');
console.log(newName.name); // New binding, `this` refers to the new `newName` object, logs: "John"

// The this keyword is determined by the function’s invocation context, not its definition.

// Static Scope vs Dynamic Scope
//  Static Scope =>  based on where variables and functions are physically defined in the source code. We can determine the scope of variable or function
//  Dynamic Scope : Scope will be determine on function invoked (calling) not based on definition of function 

// java script follow static scope but this keyword behaviour is dynamic scope and reusable
// Example : dynamic scoping

function dynamicObj(){
    console.log(this.value);
}
let ob1 = {value : "one", show : dynamicObj};
let ob2 = { value: "two", show: dynamicObj };

ob1.show() // "this" refers to ob1 because it's called through obj1, outputs: one
ob2.show() // "this" refers to ob2 because it's called through obj1, outputs: two

// ### this dynamic binding

function greetName(){
    console.log(this.name);
}

let obj1 = {name : "Kyle", greetName : greetName}; // give fn as property (key-value)
let obj2 = { name: "Suzy", greetName: greetName }; // give fn as property (key-value)

obj1.greetName() // Kyle , using function key to execute fn
obj2.greetName() // Suzy , using function key to execute fn

// Hard Binding 

const workshop = {
    topic: "JavaScript",
    ask() {
        console.log(this.topic);
    }
};

const askBound = workshop.ask.bind(workshop);
setTimeout(askBound, 1000); // Even if called later, 'this' remains 'workshop', output: "JavaScript"

// .bind() fixes this to workshop no matter how or when the function is invoked.

// Losing this Binding:

// If you pass a method without binding it, this might get lost, often defaulting to the global object (or undefined in strict mode).

const workshop1 = {
    topic: "JavaScript",
    ask() {
        console.log(this.topic);
    }
};

const unboundAsk = workshop1.ask;
console.log(workshop1.ask()); // logs : javascript but it is not hard binding (this is implicit binding because we have not use bind)

// ### Arrow function and lexical scope
// Arrow function do not have own "this", it will inherit from lexically.

var workshow = {
    name : "Kyle",
    ask : function(){
        console.log(`I am from ragular function : ${this.name}`); // Regular Function Context: In the ask method, this refers to the workshop object, so this.name correctly outputs "JavaScript Workshop".
        setTimeout(() => {
            console.log(`i am Arrow fn ${this.name}`); // Arrow Function as Callback: Inside the setTimeout, the arrow function uses this from the enclosing ask method. It does not create its own this, so this.name still refers to the workshop object.
        }, 1000);
    }
    }

// ### ES6 Class keyword

class workshop11 {
    constructor(teacher){
        this.teacher = teacher;
    }
    ask(question){
        console.log(this.teacher.question);
    }
}

var deepJS = new workshop11("Kyle");
deepJS.ask("Is class !!") // logs : Kyle is class !!

/*

The constructor initializes object properties.
It allows parameterized object creation.
It helps maintain the structure and clarity of your code.

*/

class workshop12 {
    constructor(name){
        this.name = name;
    }
    ask(greet){
        console.log(this.name.greet);
    }
}
class second extends workshop12{
    ask(msg){
        super.ask(msg.toUpper()); // super use to inherit property of parent class
    }
}

var accessClass = new second("Uzair");
accessClass.ask(", it is my name"); // Uzair, IT IS MY NAME

