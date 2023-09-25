const targetObject = document.querySelector(".targetObject");
const inputData = document.querySelector(".inputData");
const input = document.getElementById("input");

function ubahWarna() {
  targetObject.style.backgroundColor = input.value;
}