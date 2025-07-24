"use strict";
function addDays(givenDate, days){
    givenDate.setDate(givenDate.getDate()+days); //getDate gets the day, setDate modifies it. There is also getHours and getMonth.
    return givenDate;                          //setDate modifies the day...
}

const testDate = new Date();

console.log("The date in 9 days will be: ", addDays(testDate, 9));
