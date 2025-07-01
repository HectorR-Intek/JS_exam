var candidate = {
    name: {
        firstName: "John",
        lastName: "Galt",
        phone: "123-456-7890",
    }
};

candidate.printName = function(){
        return  this.name.firstName +" "+ this.name.lastName;
    };

const everyClassInfo = document.querySelectorAll(".info"); // This line gets every HTML with class="info"
const parentDiv = everyClassInfo[1];                       // This line gets the second object of said class.
const divsChildren = parentDiv.children;                   // Here we get all children from that Div.

var firstName = candidate.name.firstName;

divsChildren[0].textContent = firstName;
divsChildren[1].textContent = candidate.printName(); //Lines 19 and 20 execute the instructions given in the exam.

divsChildren[0].style.backgroundColor = "blue"
divsChildren[1].style.backgroundColor = "red"
divsChildren[0].style.color = "white";
divsChildren[1].style.color = "white";