"use strict";
function remover(arr, obj){
    for(let i=0; i<=arr.length; i++){
        if(arr[i]== obj){
            arr.splice(i,1);
            i--;
        }
    };
    return arr;
};

console.log([2, 3, 3, 5, 7, 11, 3]);

let testNum_removed = remover([2, 3, 3, 5, 7, 11, 3], 3);
console.log(testNum_removed);