// The function returns an ok for every input argument that is considered "truthy"
// and a "no" for "falsy" input arguments.
// Thus, the outputs will be: ok, no, ok, ok, ok, ok, no, no, ok, no, no.

function log(v){
    if(v){
        console.log("ok");
    }else{
        console.log("no");
    }
}


// Our claim can be verified here:
inputs = [true, false, "true", "false", {}, [], NaN, 0, 1, undefined, null];

for(input of inputs){
    log(input);
}