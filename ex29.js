// Ex. 29
"use strict";
const linkToShow = document.getElementById("id1");
const hiddenDivs  = document.querySelectorAll("div");   // Even though there is only one div, this handle cant use it directly because its an array.  
const hiddenDiv = hiddenDivs[0];                        // The particular element of the array needs to be chosen.

function showDiv(){
    hiddenDiv.style.display= "block";
}

linkToShow.addEventListener("click", showDiv);