"use strict";
let arreglo = [1, 2, 3, 4];

Array.prototype.duplicate = function(){
    this.forEach(x => this.push(x));
    return this;
}

console.log(arreglo.duplicate());