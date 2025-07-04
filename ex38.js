// This class takes coefficients in ascending order and generates a single variable polynomial...
// that can be evaluated for a particular value of X or simply written.

class polynomial {
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
}

var quad = new polynomial(1, 2, 4);

console.log(quad.evaluate(5));
console.log(quad.toString());