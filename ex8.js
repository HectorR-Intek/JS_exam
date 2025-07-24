"use strict";
function moveZeros(arr){
    for(let i = 0; i<arr.length; i++){
        let zeroIndex = -1;
        if(arr[i] == 0){
            zeroIndex = i;
            for(let j = i+1; j<arr.length; j++){
                if(arr[j]){
                    arr[zeroIndex] = arr[j];
                    arr[j] = 0;
                    zeroIndex = -1;
                    break;
                }
            }
        }
    }
    return arr;
}

const firstInput = [2, 0, 0, 4, 5, 0, 2, 0, 0, 3, 0];
const secondInput = [0, 5, 0, 0, 7, 8, 9, 0, 0];

let firstOutput = moveZeros(firstInput);
console.log(firstOutput);

let secondOutput = moveZeros(secondInput);
console.log(secondOutput);

