//ex. 19
// Function stringPattern finds the string pattern called "pattern" in string "string". If found,
// returns the string index in which the pattern starts or "no match" if it isnt found.
"use strict";
function stringPattern(pattern, string){
    for(let i = 0; i<string.length; i++){                  // For each letter of string:
        let zum = 0;                                       // zum counts number of individual character matches. If zum reaches length of pattern: success.
        for(let j = 0; j<pattern.length; j++){            
            if(string[i+j]==pattern[j]){
                zum += 1;
            } else if(pattern[j]=="*" && string[i+j]){     //The && verifies that * does not substitute empty values after sentence has ended.
                zum += 1;
            }
            if(zum==pattern.length){
                //console.log("match starts at index: ", i);
                return string.slice(i,i+pattern.length);
            }
        }
    }
    return null;
    //No match
}

console.log(stringPattern("*n", "ccon"));