function randomNumber (min, max){
    if(min>=max){
        return "Min number must be greater than Max number";
    }

    // Here we get the randomness 
    var bigNum = Date.now();                                    // Amount of ms since midnight January 1st, 1970: its the seed.
    var lastThree = bigNum.toString().slice(-3);                // These are the three least significant digits.
    console.log("ultimos 3 digitos en str: ", lastThree);
    var operable = Number(lastThree);                           
    console.log("el operable: ", operable);
    
    // We operate the three digit number:

    operable *= min;
    while(operable>max){
        operable = (operable%max)+1;
        if(operable<min){
            operable += min;
        }
    }
    console.log(operable);
}

randomNumber(451, 3900);