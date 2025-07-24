//Ex. 37
"use strict";
String.prototype.exclamation = function(){
    console.log(`${this}!`);
}

"Hello".exclamation();
"Hello World".exclamation();

// Addition function with ES6 syntax

const add = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(add(2,5));
console.log(add(7, 11));
console.log(add(12, 8, 5, 6));