function myPowerFn(base){
    return function (exponent){
        console.log(base**exponent);
    }
};

n = myPowerFn(3);
n(2);               //Up to here, same as in the exam.


n(4);
n(5); // More cases to check if closure works.