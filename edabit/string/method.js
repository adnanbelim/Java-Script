let str1 = "hello kaif bhai";
let str2 = "ha kaif bhai";

// ctrl + alt + N = output

// Length
console.log(str1.length);

// charAt => return value by indexing value
console.log(str1.charAt(8));

// charATCode => return ASCII value by indexing value
console.log(str1.charCodeAt(6));

// concat
console.log(str1.concat( " " + str2));

// padStart => this add symbol or anything in start. condition is function value will greater str length
console.log(str1.padStart(17, '*')); 

// padEnd => add symbol or anything in end
console.log(str1.padEnd(17, '*')); 

// slice => start index to last index print
console.log(str1.slice(6)); //kaif bhai
console.log(str1.slice(6, 10)); //kaif

// includes => check available or not
console.log(str1.includes("kaif"));

// indexOf => return index value
console.log(str1.indexOf("kaif"));

// lastIndexOf => return last index value
console.log(str1.lastIndexOf("kaif"));

// replace("searchValue", "newValue")
console.log(str1.replace("kaif", "ahamad"));

// split => return array
console.log(str1.split("")); //destruct single value
console.log(str1.split(" ")); //destruct by word

// toLowerCase
console.log(str1.toLowerCase());

// toUpperCase
console.log(str1.toUpperCase());

// trim
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());



