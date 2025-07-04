// Exercise 35: Table.

const table = document.querySelector("table");
const header = table.rows[0].cells[1];  //Age header: will be clickable.
header.style.backgroundColor = "yellow";

let ascending = true;

header.addEventListener("click", () => {
    const rowz = Array.from(table.rows).slice(1);

    rowz.sort((a,b)=> {
        const ageA = parseInt(a.cells[1].textContent, 10);
        const ageB = parseInt(b.cells[1].textContent, 10);
        return ascending ? ageA - ageB : ageB - ageA;
    });

    rowz.forEach(row => table.appendChild(row));
    ascending = !ascending;
})