// This class takes coefficients in ascending order and generates a single variable polynomial
// that can be evaluated for a particular value of X or simply written.
"use strict";
class Polynomial {
    constructor( ...coefficients){
        this.coefficients = coefficients;
    }

    evaluate(x){
        return this.coefficients.reduce(
            (acc, coefficients, i) => acc+coefficients*x**i, 0
        );
    }

    toString(){
        return this.coefficients
        .map((coef, i) => `${coef}x^${i}`)
        .reverse()
        .join("+");
    }

    // This method will be inherited by other classes but its implementation will be different for each case, 
    // thus exemplifying inheritance and polymorphism.
    realRoots(){
        return ["Not implemented for polynomials of 4th grade or higher."]
    }
}

class Linear extends Polynomial {
    constructor(a, b) {
        super(b, a);        // Ascending order: constant b, then linear coefficient a.
    }

    realRoots() {
        const [b, a] = this.coefficients;
        if (a === 0) return b === 0 ? ["Indeterminate form"] : ["Division by zero is undefined"];
        return [-b / a];
    }
}

class Quadratic extends Polynomial {
    constructor(a, b, c) {
        super(c, b, a); // c + bx + ax²
    }

    realRoots() {
        const [c, b, a] = this.coefficients;
        const determinant = b ** 2 - 4 * a * c;
        if (a === 0) return new Linear(b, c).realRoots();       //a = 0 is actually linear
        if (determinant < 0) return ["No real roots"];
        if (determinant === 0) return [-b / (2 * a)];
        const sqrtD = Math.sqrt(determinant);
        return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
    }
}


const cubi = new Polynomial(1, 2, 4, 3);
const quad = new Quadratic(1, -2, -15);
const lin  = new Linear(3, -6);


console.log("Real roots of: ", lin.toString(), "are: ", lin.realRoots());
console.log("Real roots of: ", quad.toString(), "are: ", quad.realRoots());
console.log("Value for :", quad.toString(), "with x equal to 4 is", quad.evaluate(4));
