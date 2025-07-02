//Exercise 31

const allParagraphs = document.querySelectorAll("p");

function toggler(){
    if(this.style.opacity == 0){
        this.style.opacity = 1;
    } else{
        this.style.opacity = 0;
    };
}

for(para of allParagraphs){
    para.addEventListener("click", toggler);
}