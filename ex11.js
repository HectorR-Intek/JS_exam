const girl = {
    name: "Pamela",
    lastName: "Santoyo",
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


function otherProperties(firstObject, secondObject){
    difference = [];
    refOne = Object.keys(firstObject);
    refTwo = Object.keys(secondObject);
    for(let i = 0; i<refOne.length; i++){
        if(refOne[i] in secondObject){
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
    difference= refOne.concat(refTwo);
    console.log("different properties are: ", difference);
}

otherProperties(girl, dog);
otherProperties(girl, car);
otherProperties(car, dog);