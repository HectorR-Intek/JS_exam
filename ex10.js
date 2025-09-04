"use strict";
function Person(first, last) {
  //Constructor function for Person object.
  this.firstName = first;
  this.lastName = last;
}

Person.prototype.greet = function () {
  // We add a method called greet.
  console.log(this.firstName, this.lastName); // This method belongs to the prototype so not every instance has a copy.
}; // They all use the same.

function Medic(firstName, lastName, specialty) {
  Person.call(this, firstName, lastName); //This line inherits PROPERTIES from Person INSTANCE.
  this.specialty = specialty; //This line adds a new property.
}

Medic.prototype = Object.create(Person.prototype); //This line inherits methods from Person
Medic.prototype.constructor = Medic;

Medic.prototype.introduce = function () {
  console.log(this.firstName + " " + this.lastName + " " + this.specialty);
};

/*
Medic.prototype.generateQuery = function (){
    return new URLSearchParams({
        firstName : this.firstName,
        lastName  : this.lastName,
        specialty : this.specialty,
    }).toString();
}*/

Person.prototype.generateQuery = function () {
  return new URLSearchParams({
    firstName: this.firstName,
    lastName: this.lastName,
  }).toString();
};

Person.prototype.sendRequest = function () {
  const url = `https://api.person.com/info?${this.generateQuery()}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log("Data retrieved:", data))
    .catch((err) => console.error("Error:", err));
};

var renata = new Person("Renata", "Vazquez");
var drRenata = new Medic("Renata", "Vazquez", "Cardiology");

renata.greet();

drRenata.introduce();
drRenata.greet(); //Output of this line equals Renata.greet, yet this is a Medic object
//thus proving the inheritance occured.
