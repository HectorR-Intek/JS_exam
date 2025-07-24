"use strict";
class RandomGenerator{
    constructor(min, max, key){                // key is an arbitrary number that changes the pseudorandom generation.
        if(min>max){
            throw new Error("Max has to be greater than min");
        }
    
    this.min = min;
    this.max = max;
    this.size = max - min + 1;
    this.key = key >>> 0;                     // This line converts type to a 32bits unsigned int
    this.counter = 0;                         // All these values are preserved by closure.

    const bits = Math.ceil(Math.log2(this.size));  // These are the number of bits needed to represent the number `size`.
    this.halfBits = Math.floor(bits/2);
    this.mask = (1<< this.halfBits) - 1;      // These are halfbits filled with ones, since << displaces the one, halfbits to the left
    }                                         // and then the substraction of 1 shifts the zeroes to ones.
    
    simpleFeistel(index){                     // Index will be the seed for the pseudorandom generation  
        let L = index & this.mask;                               //    
        let R = (index >> this.halfBits) & this.mask;

        let F = Math.imul((R^this.key), 0x5bd1e995)& this.mask;  // imul is a multiplication with a big integer and & keeps only 
                                                                 // halfBits of the product
        let newL = R;
        let newR = L ^ F;

        let result = (newR << this.halfBits) | newL;

        if(result >= this.size){
            return this.simpleFeistel((result+1) % this.size) // In case the operations yield a number outside of size.
        }
        return result;
    }

    next(){
        if(this.counter >= this.size) return null;      // Numbers in range have all been yielded and no more are left
        const val = this.simpleFeistel(this.counter++);
        return val + this.min;
    }

    reset(){
        this.counter = 0;
    }
}

// This is a particular instance of the generator being called ten times.

const gen = new RandomGenerator(10, 25, 34335);

for(let i=0; i<10; i++){
    console.log(gen.next());
}

