"use strict";
let testArray = [1, 2, 3, 4];

Array.prototype.duplicate = function () {
  return this.concat(this);
};

console.log(testArray.duplicate());
