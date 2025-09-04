"use strict";
function months(inputString) {
  let words = inputString.split(" ");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let aux = [];
  for (let i = 0; i < words.length; i++) {
    let monthIndex = months.indexOf(words[i]); //Here we save the index of the current month we're checking
    if (words[i + 1] !== months[(monthIndex + 1) % 12]) {
      // If next month does not match the calendar

      aux = words.slice(i + 1); // I save the rest of the array for later...
      words.splice(i + 1); // remove it...
      words.push(months[(monthIndex + 1) % 12]); // and add next month...
      words = words.concat(aux); // then I add the rest of the array back.
      i++; // I've changed the size of the array so I forward the index.
    }
  }
  let outputString = "";
  for (let j = 0; j < words.length; j++) {
    outputString += " " + words[j]; // This loop converts the array of strings into a single string.
  }
  return outputString;
}

const inpStr = "March April May June March April May June";
console.log(months(inpStr));

const inpStr2 = "October November December October November December";
console.log(months(inpStr2));

const inpStr3 = "December January February December January February";
console.log(months(inpStr3));
