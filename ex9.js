function fibonacci(n){
    if(n<=1){
        return 1;
    } else {
        return (fibonacci(n-1)+fibonacci(n-2))
    }
};

for(let i = 0; i<=15; i++){
    console.log("Only recursive: ", fibonacci(i));
}


function fiboMemo(n, cache){
    cache = cache || [1, 1];    //cache is either received or generated. Key-Value pair is index-value pair in this array.

    if(cache[n]){
        return cache[n];        // If it already exists, we use it.
    }else{
        return cache[n] = (fiboMemo(n-1, cache)+ fiboMemo(n-2, cache));
    }
};

for(let i = 0; i<=15; i++){
    console.log("Recursive and memoized: ", fiboMemo(i));
}