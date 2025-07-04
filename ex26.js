// Both functions have a private and anonymous function inside of them that prints property foo of this
// however that private anonymous function is never invoked and does nothing.
// The global function then returns an object with a single property called foo which is a string.
// Both functions are equivalent in structure, just the name changes.

function foo1(){
   var fn = function(){
  	console.log(this.foo);
   };
   return { foo:'bar' };
 }
 
function foo2(){ 
   var fn = function(){
       console.log(this.foo); 
   };
   return { foo:'baz' };
}

console.log(foo1());
console.log(foo2());
