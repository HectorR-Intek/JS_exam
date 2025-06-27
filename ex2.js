var myName = "my name is Hector";
var myCity = "I live in Leon";

String.prototype.reverse = function(){
    let reversedString = "";
    for(let i = this.length; i>0; i--){
        reversedString += this[i-1];
    };
    console.log(reversedString);
};

String.prototype.reverseWords = function(){
    let reversedWords ="";
    let words = this.split(" ");
    for(let i = 0; i<words.length; i++){
        reversedString ="";
        newString = words[i];
        for(let j = newString.length; j>0; j--){
            reversedString += newString[j-1];
        };
        reversedWords += reversedString + " ";
    };
    console.log(reversedWords);
 };

console.log(myName);
console.log(myCity);

myName.reverse();
myCity.reverse();

myName.reverseWords();
myCity.reverseWords();

