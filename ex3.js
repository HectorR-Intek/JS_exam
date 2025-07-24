"use strict";
function intersection(a,b){
    let intersected = [];
    for(let elementA of a){
        for(let elementB of b){
            if (elementB === elementA){
                intersected.push(elementA);
                break;
            }
            continue;
        }
    }
    return intersected;
}

const pairs = [2, 4, 6, 8, 10, 12];
const multThree = [3, 6, 9, 12];


console.log("Pair numbers: ", pairs);
console.log("Multiples of three: ", multThree);
const mult6 = intersection(pairs, multThree);
console.log("Intersection of pair numbers and multiples of three: ", mult6);

let test1 = [2, 3, 5, 3];
let test2 = [3, 4, 3, 5, 3, 6, 8];

const outPut = intersection(test1, test2);
console.log(outPut);