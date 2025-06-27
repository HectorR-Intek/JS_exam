function intersection(a,b){
    let intersected = [];
    for(var elementA of a){
        for(elementB of b){
            if (elementB === elementA){
                intersected.push(elementA);
                break;
            }
            continue;
        }
    }
    return intersected;
}

var pairs = [2, 4, 6, 8, 10, 12];
var multThree = [3, 6, 9, 12];


console.log("Pair numbers: ", pairs);
console.log("Multiples of three: ", multThree);
mult6 = intersection(pairs, multThree);
console.log("Intersection of pair numbers and multiples of three: ", mult6);

var test1 = [2, 3, 5, 3];
var test2 = [3, 4, 3, 5, 3, 6, 8];

outPut = intersection(test1, test2);
console.log(outPut);