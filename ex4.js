function flattener(arr){
    var newArr = [];   
    for(var num of arr){
        if(typeof(num)=="object"){
            newArr = newArr.concat(flattener(num));         //This method made me struggle. It doesnt affect the original arrays.
        }else{
            newArr.push(num);                               //This method does affect the original array.
        }        
    }
    return newArr;
};

var nested= [1, 2, 3, [4, 5]];
console.log("Array for first test", nested);

var firstTest = flattener(nested);
console.log("First Test: ", firstTest);

var nestedTwo = [1, 2, 3, [4, [5, 6]], 7]; //Array inside array inside array
console.log("Array for second test", nestedTwo);

var secondTest = flattener(nestedTwo);
console.log("Second Test: ", secondTest);
