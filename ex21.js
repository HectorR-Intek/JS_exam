//Exercise 21:

/*
For the first snippet of code a string variable called "foo" is declared and its value is set as the word "hello". 
Then, an IIFE is defined inside a parenthesis and executed right away.
That anonymous function has a variable declaration inside of it: bar = "World", and invokes the function alert() with
foo + bar as input arguments. Thus the output is an alert box containing the sentence "hello World".
Outside of the function, alert() is invoked again with the same input but since variable bar was defined inside an IIFE is 
out of scope and we get a Reference error: bar is not defined.


Second snippet of code includes a conditional that prints "array is true" in the console if []. Javascript treats every object as
"truthy", thus returning a true and printing the string. However the second line of code has conditional if([]==true). In this case
there is coercion from the empty array to an empty string, then the empty string to a 0 which is falsy. This coercion is allowed
by the double equal sign.

Third snippet of code has a loop and inside of it, a setTimeout(). This function waits an specified time (100 ms in this example)
to invoke a callback function which in this case is console.log() to print the iterable index of the for loop. 

Fourth snippet of code has an object called obj with only one property, called prop and being an empty object.
After declaring the object variable the property is then deleted, then console.log() is asked to print it but the output
is undefined.

*/

var obj = {
   prop: {}
};

delete obj.prop;
console.log(obj.prop);
