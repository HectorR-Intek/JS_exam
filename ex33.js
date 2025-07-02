//Ex 33

/*
In both cases:

function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

the output would be the same because those quotation marks make no difference when defining 
string variables such as a property for an object.

Only relevant difference is when using JSON files, in which it is needed to use double quotation 
marks: "".
*/

function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

console.log(func1());
console.log(func2());
