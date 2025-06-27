var candidate = {
    name: {
        firstName: "John",
        lastName: "Galt",
        phone: "123-456-7890",
    }
};

candidate.printName = function(){
        console.log(this.name.firstName+" "+this.name.lastName);
    };


candidate.printName();

const rena = Object.create(candidate);
rena.name.firstName = "Renata";
rena.name.lastName = "Vazquez";

rena.printName();