"use strict";
const myName = "my name is Hector";
const myCity = "I live in Leon";

String.prototype.reverse = function(){
    let reversedString = "";
    for(let i = this.length; i>0; i--){
        reversedString += this[i-1];
    };
    return reversedString;
};

String.prototype.revWords = function(){
    let reversedWords = "";
    let words = this.split(" ");
    for(let word of words){
        reversedWords += word.reverse()+ " ";
    }
    return reversedWords;
}

console.log(myName);
console.log(myCity);

console.log(myName.reverse());
console.log(myCity.reverse());

console.log(myName.revWords());
console.log(myCity.revWords());

