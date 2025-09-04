"use strict";
const table = document.querySelector("table");
const lastColumn = document.querySelectorAll(".lastCol");
const editColumn = document.querySelectorAll(".editCol");

const addLink = table.rows[0].cells[4];

addLink.addEventListener("click", addRow);

for (let i = 0; i < lastColumn.length; i++) {
  lastColumn[i].addEventListener("click", changeColor);
}

const generateEditRow = function () {
  let toggle = "false";

  return function () {
    const row = this.parentElement;
    if (toggle) {
      row.cells[3].style.backgroundColor = "green";
      row.cells[0].contentEditable = "true";
      row.cells[1].contentEditable = "true";
      row.cells[2].contentEditable = "true";
      toggle = !toggle;
    } else {
      row.cells[3].style.backgroundColor = "white";
      row.cells[0].contentEditable = "false";
      row.cells[1].contentEditable = "false";
      row.cells[2].contentEditable = "false";
      toggle = !toggle;
    }
  };
};

let editRow = generateEditRow();

for (let j = 0; j < editColumn.length; j++) {
  editColumn[j].addEventListener("click", editRow);
}

function loadTableData() {
  fetch("http://localhost:3000/people")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((person) => {
        const row = table.insertRow(-1);
        row.dataset.id = person.id;
        row.insertCell(0).textContent = person.name;
        row.insertCell(1).textContent = person.lastName;
        row.insertCell(2).textContent = person.phone;

        const editCell = row.insertCell(3);
        editCell.textContent = "Edit Cell";
        editCell.addEventListener("click", editRow);

        const lastCell = row.insertCell(4);
        lastCell.textContent = "Delete";
        lastCell.classList.add("lastCol");
        lastCell.addEventListener("click", deleteRow);
      });
    })
    .catch((err) => console.error("Error loading data:", err));
}

window.onload = loadTableData;

function addRow() {
  const newRow = table.insertRow(-1);
  newRow.insertCell(0).contentEditable = false;
  newRow.insertCell(1).contentEditable = false;
  newRow.insertCell(2).contentEditable = false;

  const editCell = newRow.insertCell(3);
  editCell.textContent = "Edit Cell";
  editCell.addEventListener("click", editRow);

  const lastCell = newRow.insertCell(4);
  lastCell.textContent = "Delete"; //Here there was .innerHTML
  lastCell.classList.add("lastCol");
  lastCell.addEventListener("click", deleteRow);

  addLink.style.backgroundColor = "blue";

  newRow.addEventListener(
    "blur",
    function () {
      const name = newRow.cells[0].textContent.trim();
      const lastName = newRow.cells[1].textContent.trim();
      const phone = newRow.cells[2].textContent.trim();

      // Sending to mock backend
      fetch("http://localhost:3000/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastName, phone }),
      })
        .then((res) => res.json())
        .then((data) => {
          newRow.dataset.id = data.id;
          console.log("Person added:", data);
        })
        .catch((err) => console.error("Error adding person:", err));
    },
    { once: true }
  );
}

function changeColor() {
  this.style.backgroundColor = "red";
  this.parentElement.remove();
}

function deleteRow() {
  const row = this.parentElement;
  const id = row.dataset.id;

  if (id) {
    fetch(`http://localhost:3000/people/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        row.remove();
        console.log("Person deleted");
      })
      .catch((err) => console.error("Error eliminating", err));
  } else {
    row.remove();
  }
}

table.addEventListener(
  "blur",
  function (event) {
    const cell = event.target;
    const row = cell.parentElement;
    const id = row.dataset.id;

    if (!id) return;

    const updatedData = {
      name: row.cells[0].textContent.trim(),
      lastName: row.cells[1].textContent.trim(),
      phone: row.cells[2].textContent.trim(),
    };

    fetch(`http://localhost:3000/people/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => console.log("Data was updated"))
      .catch((err) => console.error("Error updating: ", err));
  },
  true
);
