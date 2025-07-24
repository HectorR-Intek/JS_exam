"use strict";
function partitionsOfThree(nums){

    let combinations = [];
    let solutions    = [];
    let control      = [];

    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length-1; j++){
            combinations.push([i,j])            //We start by considering all pair combinations of indices.
        }
    }

    for(let j=0; j<nums.length; j++){
        let pivot = nums[j];                                         // The first number is called pivot
        let arrayRemoved = nums.slice(0,j).concat(nums.slice(j+1))   // Pivot is removed from the array temporarily
        
        for(let k=0; k<combinations.length; k++){                        //We combine indices in triplets: pivot + pair combination.
            let zum = pivot+arrayRemoved[combinations[k][0]]+arrayRemoved[combinations[k][1]];
            if(zum==0){                                              // If sum of triplet is zero, then triplet is a solution.
                let solution = [pivot, arrayRemoved[combinations[k][0]], arrayRemoved[combinations[k][1]]];
                let quad = pivot**2+ arrayRemoved[combinations[k][0]]**2 + arrayRemoved[combinations[k][1]]**2;
                if(!(control.includes(quad))){                       // We check if solution is not repeated by adding sum of squares of triplet.
                    solution.sort();                                 // If sum of squares has not been added, then triplet neither, thus we add it.
                    solutions.push(solution);
                    control.push(quad);
                }
            }
        }
    }
    return solutions;
};

function callPartitions(arr){
    const combinations = partitionsOfThree(arr);

    for(let i=0; i<combinations.length; i++){
        console.log(combinations[i])
    }
    console.log("---")
}

callPartitions([3,2,1,0,-3,-2]);
callPartitions([5, 1, 2, -6, -3, -7]);

