"use strict";
function flattener(arr){
    let newArr = [];   
    for(let num of arr){
        if(typeof(num)=="object"){
            newArr = newArr.concat(flattener(num));         //This method made me struggle. It doesnt affect the original arrays.
        }else{
            newArr.push(num);                               //This method does affect the original array.
        }        
    }
    return Array.from(newArr);
};

const test = [1, 2, 3];
console.log(test, "is array: ", Array.isArray(test), "\n");

const nested= [1, 2, 3, [4, 5]];
console.log("Array for first test", nested);

const firstTest = flattener(nested);
console.log("First Test: ", firstTest);
console.log("First output is array: ", Array.isArray(firstTest), "\n");

const nestedTwo = [1, 2, 3, [4, [5, 6]], 7];            //Array inside array inside array
console.log("Array for second test", nestedTwo);
const secondTest = flattener(nestedTwo);
console.log("Second Test: ", secondTest);
console.log("Second output is array: ", Array.isArray(secondTest), "\n");