// The value of foo.length() will be 2 since there are 2 calls of the .push() method onto an empty array.
// The numbers 1 and 2 are the elements themselves that are being added, not to be confused with the numerical size of the array.

var foo = [];
foo.push(1);
foo.push(2);



console.log(foo.length)