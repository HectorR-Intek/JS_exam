// exercise 30

const allParagraphs = document.querySelectorAll("p");
const firstParagrahps = [];

for(let i=0; i<allParagraphs.length; i+=2){
    firstParagrahps.push(allParagraphs[i]);         //These are the paragraphs that work as toggle. They are even.
}

function toggler(){
    const hiddenParagraph = this.nextElementSibling;
    if(hiddenParagraph.style.display=="none"){
        hiddenParagraph.style.display= "block";
    }else{
        hiddenParagraph.style.display= "none";
    }
}

for(paragraphs of firstParagrahps){
    paragraphs.addEventListener("click", toggler);  // This line adds an Event Listener for each of the toggle paragraphs.
}