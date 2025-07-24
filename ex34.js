// Exercise 34
"use strict";
const ball = document.getElementById("ball");
function fakeDrop(){
    drop(0);
}

function drop(flag){
    //--------
    const container = document.getElementById("container");
    const containerHeight = container.clientHeight;
    const ballHeight = ball.clientHeight;
    const floorY = containerHeight - ballHeight;
    const gravity = 0.06;
    //-----
    (flag%2 ==0) ? downwards():upwards();
        function downwards(){
            let velocity = 0;
            let movement = setInterval(moveDown, 5);
            function moveDown(){
                let vertical = parseFloat(getComputedStyle(ball).top, 10);
                if(vertical >= floorY){
                        ball.style.top = floorY + "px";
                        clearInterval(movement);
                        flag++;
                        drop(flag);
                }else{
                    //vertical++;
                    velocity += gravity;
                    vertical += velocity;
                    ball.style.top = vertical+"px";
                }
            }
        };
        function upwards(){
            let bounceHeight = (96 * flag);
            let velocity = (floorY - bounceHeight)/20;
            let movement = setInterval(moveUp, 5);
            function moveUp(){
                let vertical = parseFloat(getComputedStyle(ball).top, 10);
                if(vertical <= bounceHeight){
                    ball.style.top = bounceHeight + "px";
                    clearInterval(movement);
                    if ((floorY - bounceHeight) < 1) return;
                    flag++;
                    drop(flag);
                }else{
                    //vertical--;
                    velocity -= gravity;
                    vertical -= velocity;
                    ball.style.top = vertical+"px";
                }
            }
        }
}


ball.addEventListener("click", fakeDrop);