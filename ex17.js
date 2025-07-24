"use strict";
const parentDiv = document.querySelector("#body div.info") //Access the div with class "info" that is child of element with ID: body
const divsChildren = parentDiv.children;

const firstName = candidate.name.firstName;

divsChildren[0].textContent = firstName;
divsChildren[1].textContent = candidate.printName(); 


