"use strict";
function searchDifferentProperties(firstObject, secondObject){
    let diffKeys   = [];
    let diffValues = [];
    let sameKeys   = [];
    const refOne = Object.keys(firstObject);
    const refTwo = Object.keys(secondObject);
    for(let i = 0; i<refOne.length; i++){
        if(refOne[i] in secondObject){
            sameKeys.push(refOne[i]);
            refOne.splice(i,1);
            i--;
        }
    }
    for(let j = 0; j<refTwo.length; j++){
        if(refTwo[j] in firstObject){
            refTwo.splice(j,1);
            j--;
        }
    }
    for(let k = 0; k<sameKeys.length; k++){
        if(firstObject[sameKeys[k]] !== secondObject[sameKeys[k]]){
            diffValues.push(sameKeys[k]);
        }
    }

    diffKeys= refOne.concat(refTwo);

    return {
        differentKeys: diffKeys,
        differentValues: diffValues,
    }
}

function testing(){

    const girl = {
        name: "Pamela",
        lastName: "Santoyo",
        age: "15"
    };

    const woman = {
        name: "Pamela",
        lastName: "Salgado",
        age: "28"
    };

    const dog = {
        name: "Solovino",
        age: "5",
        breed: "Bulldog"
    };

    const car = {
        name: "Corvette",
        year: "2016",
        color: "red"
    };

    let difference = searchDifferentProperties(girl, woman);
    console.log("Different keys: ", difference.differentKeys);
    console.log("Different values: ", difference.differentValues, "\n");

    difference = searchDifferentProperties(woman, dog);
    console.log("Different keys: ", difference.differentKeys);
    console.log("Different values: ", difference.differentValues, "\n");

    difference = searchDifferentProperties(dog, car);
    console.log("Different keys: ", difference.differentKeys);
    console.log("Different values: ", difference.differentValues, "\n");
}

testing();