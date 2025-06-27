function person(myName, myLastName){
    this.myName = myName;
    this.myLastName = myLastName;
    this.greeting = function(){
        console.log(myName+" "+myLastName)};
};

var Renata = new person("Renata", "Vazquez");
Renata.greeting();

function medic(myName, myLastName, specialty){

    person.call(this, myName, myLastName);      //This line inherits name properties from person object.
    this.specialty = specialty;                 //This line adds the new property.
    this.introduction = function(){
        console.log(myName+" "+myLastName+" "+specialty);
    }
}

var DrRenata = new medic("Renata", "Vazquez", "Cardiology");

DrRenata.introduction()
DrRenata.greeting();    //Output of this line equals Renata.greeting, yet this is a medic object
                        //thus proving the inheritance occured.



const query = new URLSearchParams(DrRenata).toString();
const url = `https://api.doctors.com/info?${query}`;

fetch(url)
  .then(res => res.json())
  .then(data => console.log("Data retrieved: ", data))
  .catch(err => console.error("Error: ", err));                        