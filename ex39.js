"use strict";
function isInvalidInput(value) {
  const keyboardRows = [
    "1234567890",
    "0987654321",
    "qwertyuiop",
    "poiuytrewq",
    "asdfghjkl",
    "lkjhgfdsa",
    "zxcvbnm",
  ];

  const val = value.toLowerCase();

  for (let row of keyboardRows) {
    for (let i = 0; i <= row.length - 4; i++) {
      const pattern = row.slice(i, i + 4);
      if (val.includes(pattern)) {
        return true;
      }
    }
  }
  return false;
}

const input = document.getElementById("userInput");
const warning = document.getElementById("warning");

input.addEventListener("input", function () {
  if (isInvalidInput(this.value)) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});
