const colorChanger = document.getElementById("colorChanger");
const colorButton  = document.getElementById("colorButton");  //These lines assign HTML items to JS constants by their ID

function changeColor(){                                       //This function acts on the constant called "colorChanger"
    if(colorChanger.style.backgroundColor=="red"){
        colorChanger.style.backgroundColor = "blue";
    }else{
        colorChanger.style.backgroundColor = "red";
    }
}

colorButton.addEventListener("click", changeColor);           // This line acts on the constant "colorButton" providing it with
                                                              // the funcion "changeColor" when clicked.