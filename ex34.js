// Exercise 34
const ball = document.getElementById("ball");
function fakeDrop(){
    drop(0);
}

function drop(flag){
    (flag%2 ==0) ? downwards():upwards();
        function downwards(){
            let movement = setInterval(moveDown, 5);
            function moveDown(){
                let vertical = parseInt(getComputedStyle(ball).top, 10);
                if(vertical == "672"){
                        clearInterval(movement);
                        flag++;
                        drop(flag);
                }else{
                    vertical++;
                    ball.style.top = vertical+"px";
                }
            }
        };
        function upwards(){
            let bounceHeight = (96 * flag);
            let movement = setInterval(moveUp, 5);
            function moveUp(){
                let vertical = parseInt(getComputedStyle(ball).top, 10);
                if(vertical <= bounceHeight){
                    clearInterval(movement);
                    flag++;
                    drop(flag);
                }else{
                    vertical--;
                    ball.style.top = vertical+"px";
                }
            }
        }
}


ball.addEventListener("click", fakeDrop);