var arreglo = [1, 2, 3, 4];

Array.prototype.duplicate = function(){
    len = this.length;
    aux = this;
    acc = aux; //acc for accumulator
    for(let i=0; i<len; i++){           //len has to be stored independently, if this.length is used the loop never ends.
        acc.push(aux[i]);
    }
    console.log(acc);
};

arreglo.duplicate();