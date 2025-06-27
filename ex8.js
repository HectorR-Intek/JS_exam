function moveZeros(arr){
    let z = 0;
    for(let i = 0; i<arr.length; i++){
        let x = arr[i];
        if (x == 0){
            arr.splice(i,1);
            z++;
            i--;                    //Substraction was needed because the size of the arr changes after zero is removed
        }                           //So the same index has to be checked twice: before and after displacement.
    }
    for(let j = 0; j<z; j++){
        arr.push(0);
    }
    return arr;
}

entrada = [2, 0, 0, 4, 5, 0, 2, 0, 0, 3, 0];
entradaDos = [0, 5, 0, 0, 7, 8, 9, 0, 0];

salida=moveZeros(entrada);
console.log(salida);

salidaDos = moveZeros(entradaDos);
console.log(salidaDos);

