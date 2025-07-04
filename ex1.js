//Animation 

const button = document.getElementById("button");

function moveLeft(){
    const elem = document.getElementById("animation");

    let positionLeft = parseInt(getComputedStyle(elem).left, 10) || 0;
    movement = setInterval(move, 2);
    function move(){
        if(positionLeft == 0){
            clearInterval(movement);
        }else{
            positionLeft--;
            elem.style.left = positionLeft+"px";
        }
    }
}

function changeColor(){
    const elem = document.getElementById("animation");
    elem.style.backgroundColor = "red";
}

button.addEventListener("click", moveLeft);