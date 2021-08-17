let inputField = document.getElementById("input");

//clear all
function clearAll() {
  inputField.value = "";
}

//delete one by one
function del() {
  inputField.value = inputField.value.slice(0, -1);
}

//insert number or operators
function display(num) {
  inputField.value += num;
}

//calculated
function calculate() {
  try {
    inputField.value = eval(inputField.value);
  } catch (err) {
    alert("Invalid");
  }
}
