function addDays(days){
    var newDate = new Date();
    newDate.setDate(newDate.getDate()+days); //getDate gets the day, setDate modifies it. There is also getHours and getMonth.
    return newDate;                          //setDate modifies the day...
}

console.log("The date in 9 days will be: ", addDays(9));
