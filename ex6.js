function months(inputString){
    let words = inputString.split(" ");
    var aux = [];
    for(let i = 0; i<words.length; i++){
        if(words[i]=='March'){                  // When March is found...
            aux = words.slice(i+1);             // I save the rest of the array for later...
            words.splice(i+1);                  // remove it...
            words.push("April");                // and add April...
            words = words.concat(aux);          // then I add the rest of the array back.
        }
    }
    outputString = "";
    for(let j = 0; j<words.length; j++){
        outputString += " " + words[j]          // This loop converts the array of strings into a single string.
    }
    console.log(outputString);
}

inpStr = "January February March January February March";
months(inpStr);