//Exercise 31
"use strict";
const allParagraphs = document.querySelectorAll("p");

for(let i=0; i<allParagraphs.length; i+=2){         //These are the paragraphs that work as toggle. They are even.
    allParagraphs[i].addEventListener("click",toggler);
}

function toggler(){
    const hiddenParagraph = this.nextElementSibling;
    const paragraphDisplay = getComputedStyle(hiddenParagraph).display;
    
    for(let i=1; i<allParagraphs.length; i+=2){     //This line hides every odd <p> that isnt clicked.
        allParagraphs[i].style.display = "none";         
    }
    if(paragraphDisplay === "none"){
        hiddenParagraph.style.display = "block";
    }else{
        hiddenParagraph.style.display = "none";
    }
}