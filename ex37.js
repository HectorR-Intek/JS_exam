//Ex. 37

String.prototype.exclamation = function(){
    console.log(this.valueOf()+"!");
}

"Hello".exclamation();
"Hello World".exclamation();

//addition function 

function add(...numbers){
    total = 0;
    for(num of numbers){
        total += num;
    }
    console.log(total);
}

add(2,5);
add(7, 11);
add(12, 8, 5, 6);