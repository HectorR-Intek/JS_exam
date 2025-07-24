// exercise 30
"use strict";
const allParagraphs = document.querySelectorAll("p");

for(let i=0; i<allParagraphs.length; i+=2){
    allParagraphs[i].addEventListener("click", toggler);
}

function toggler(){
    const hiddenParagraph = this.nextElementSibling;
    const paragraphDisplay = getComputedStyle(hiddenParagraph).display;

    if(paragraphDisplay=="none"){
        hiddenParagraph.style.display= "block";
    }else{
        hiddenParagraph.style.display= "none";
    }
}
