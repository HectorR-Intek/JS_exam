"use strict";
function searchForTwo(...args){
    for(let arg of args){
        if(arg === 2) return true;
    }
    return false;
}

console.log(searchForTwo("one", 1.2, "two", 2, "hello", "yes"));
console.log(searchForTwo(1, 2.4, "yes", true));