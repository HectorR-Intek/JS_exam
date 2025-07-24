"use strict";
const candidate = {
    name: {
        firstName: "John",
        lastName: "Galt",
    },
    phone: "123-456-7890",
};

candidate.printName = function(){
        return (this.name.firstName+ " "+ this.name.lastName);
};

console.log(candidate.printName());

const rena = Object.create(candidate);
rena.name = {
    ...candidate.name,
}
rena.name.firstName = "Renata";
rena.name.lastName = "Perez";

const karla = Object.create(candidate);
karla.name = {
    ...candidate.name,
}
karla.name.firstName ="Karla";
karla.name.lastName  ="Arriaga";

console.log(rena.printName());
console.log(karla.printName());