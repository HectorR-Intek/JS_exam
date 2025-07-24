//Exercise 32: explaining the code.

/* Function myLog() returns an object that has two properties, called bar and foo, and one method, which is called prop.
   The content of the properties are two strings: "bar" and "foo", respectively. The method has a property as well, which is called
   self and contains this. It then prints in the console the content of properties self.bar and this.foo. Afterwards, inside of 
   the method prop, there is an IIFE that does the same as its parent function, printing self.bar and this.foo
   
   There is no output, however, because the IIFE is only invoked when method prop is invoked but in function myLog() is only defined.
   */

function myLog() {
   return {
      bar: 'bar',
      foo: 'foo',
      prop: function () {
          var self = this;
          console.log(self.bar);
          console.log(this.foo);
          (function() {
             console.log(self.bar);
             console.log(this.foo);
          })();
      }
   };
}
