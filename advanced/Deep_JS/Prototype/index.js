class Animal {
    constructor(name){
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name} is my name`);
    }
}

var objAnimal = new Animal("Uzair");
objAnimal.speak() // logs : Uzair is my name

/*
When you create an object (like dog using new Animal("Dog")), it automatically has a link to the Animal.prototype.
This means that the object doesn’t get its own copy of methods (like speak); instead, it can access those methods through the prototype.
*/

Animal.prototype.speak = function(){
    console.log(`${this.name}, I am human`);
}

objAnimal.speak() // logs : Uzair, I am human

function human(name){
    this.name = name;
}
human.prototype.ask = function(){
    console.log(`${this.name} I am not in danger`);
}
var deepJS = new human("walt");
deepJS.ask(); // walt I am not in danger

human.prototype.ask = function(){
    console.log(`${this.name} I am danger`);
}

deepJS.ask(); // walt I am danger

//### dunder prtotype

// we know about prototype

// Each function in JavaScript has a prototype property, which is an object that can be used to add properties or methods that should be shared across all instances created by that function (using the new keyword).
// This prototype acts as a "parent" for instances created from that constructor function. When you create an instance, it inherits from the prototype.

// __proto__

// The __proto__ property is a reference to the prototype of the object. It is the internal link that points to the object's prototype.
// When you access a property or method on an object, if it isn't found on the object itself, JavaScript looks up the chain using __proto__ to find it in the prototype.

console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.__proto__.speak); // Function: the speak method

// Define a constructor function
function Workshop(name) {
    this.name = name; // Instance property
}

// Add a method to the prototype
Workshop.prototype.ask = function () {
    console.log(`What can I teach you about ${this.name}?`);
};

// Create an instance
const angularJS = new Workshop("Deep JavaScript");

// Accessing the constructor property
console.log(angularJS.constructor === Workshop); // true

// Accessing the dunder proto
console.log(angularJS.__proto__ === Workshop.prototype); // true
console.log(angularJS.__proto__.ask); // Function: the ask method
angularJS.ask(); // Output: What can I teach you about Deep JavaScript?

// Check the full prototype chain
console.log(angularJS.__proto__.__proto__ === Object.prototype); // true

















