//Instance methods are functions that belong to the prototype of an object.

Date.prototype.tomorrow = function (){
    const newDate = new Date(this); // In this context, this is the date object that calls the method.
    newDate.setDate(newDate.getDate()+1);
    return newDate;
}

var today = new Date();
console.log(today.tomorrow());