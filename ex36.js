"use strict";
function myPowerFn(base){
    return function (exponent){
        return base**exponent;
    }
};

const n = myPowerFn(3);
console.log(n(2));               //Up to here, same as in the exam.


console.log(n(4));
console.log(n(5));              // More cases to check if closure works.