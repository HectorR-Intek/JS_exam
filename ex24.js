function remover(arry, obj){
    let arr= arry;
    for(let i=0; i<=arr.length; i++){
        if(arr[i]== obj){
            arr.splice(i,1);
        }
    };
    return arr;
};

var testNum=[2, 3, 5, 7, 11];
console.log(testNum);

var testNum_removed = remover(testNum, 11);
console.log(testNum_removed);