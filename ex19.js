//ex. 19
// Function stringPattern finds the string pattern called "check" in string "ref" if found.
// Returns the ref index in which the pattern starts or "no match" if it isnt found.

function stringPattern(check, ref){
    for(let i = 0; i<ref.length; i++){                  // For each letter of ref:
        var zum = 0;                                    // zum counts number of individual character matches. If zum reaches length of pattern: success.
        var wildcardFlag = 0;                           // wildcardFlag prevents than more than a single consecutive character is *, that serves as wildcard.
        for(let j = 0; j<check.length; j++){            
            if(ref[i+j]==check[j]){
                zum += 1;
                wildcardFlag = 0;                       // flag gets reset if we get a proper letter match.
            } else if(check[j]=="*" && wildcardFlag == 0){
                zum += 1;
                wildcardFlag= 1;
            }
            if(zum==check.length){
                console.log("match starts at index: ", i);
                return;
            }
        }
    }
    console.log("no match");
    console.log(zum);
}

var ref = "constitution";
var check = "tio"

stringPattern(check, ref);