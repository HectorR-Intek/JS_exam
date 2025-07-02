//Ex. 27

/* For the first operation [] + [] the sum operator tries to convert both empty arrays
into strings, thus the output is an empty string: "". 

Second operation {} + [] has an empty object as the first element and the empty array
is coerced into a string, thus the output is: "[object Object]"

Third operation, [] + {},  involves the same elements, namely an empty array coerced into
an empty string and an empty object; output is: "[object Object]"

Lastly, {} + {}, are two empty objects and they are concatenated; the output is:
[object Object][object Object]  */


console.log([]+[]);
console.log([]+{});
console.log({}+[]);
console.log({}+{});
