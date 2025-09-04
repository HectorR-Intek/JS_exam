"use strict";

class RandomGenerator {
  //key now has a default value in case user does not provide one
  constructor(min, max, key = 0x9e3779b9) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new Error("Max and min must be integer numbers.");
    }
    if (min > max) throw new Error("Max must be greater than min");

    this.min = min;
    this.max = max;
    this.size = max - min + 1;
    this.key = key >>> 0;
    this.counter = 0;

    const bits = Math.ceil(Math.log2(this.size));
    this.halfBits = Math.ceil(bits / 2); //  CEIL instead of floor
    this.mask = (1 << this.halfBits) - 1;
  }

  coreFeistel(x) {
    let L = x & this.mask;
    let R = (x >>> this.halfBits) & this.mask;

    const F = Math.imul((R ^ this.key) >>> 0, 0x5bd1e995) & this.mask;

    const newL = R;
    const newR = (L ^ F) & this.mask;

    return ((newR << this.halfBits) | newL) >>> 0;
  }

  permute(index) {
    let x = index;
    do {
      x = this.coreFeistel(x);
    } while (x >= this.size);
    return x;
  }

  next() {
    if (this.counter >= this.size) return null;
    const val = this.permute(this.counter++);
    return this.min + val;
  }

  reset() {
    this.counter = 0;
  }

  hasNext() {
    return this.counter < this.size;
  }
}

// This is a particular instance of the generator being called ten times.

const gen = new RandomGenerator(1, 10, 34335);

for (let i = 0; i < 10; i++) {
  console.log(gen.next());
}

const gen2 = new RandomGenerator(1, 10);

for (let i = 0; i < 10; i++) {
  console.log(gen2.next());
}
