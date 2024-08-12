const display = document.getElementById("disp");
const buttons = document.querySelectorAll(".btns button ");
const cbtn = document.querySelector("#clear");

cbtn.addEventListener("click", () => {
  currentInput = "";
  operator = "";
  expression = "";
  display.innerText = "0";
});

let currentInput = "";
let operator = "";
let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === "AC") {
    currentInput = "";
    operator = "";
    expression = "";
    display.innerText = "0";
  } else if (buttonValue === "=") {
    if (currentInput) {
      expression += currentInput;
    }
    try {
      const evaluatedResult = eval(
        expression.replace(/x/g, "*").replace(/\/\//g, "/")
      );
      display.innerText = evaluatedResult;
      expression = evaluatedResult.toString();
      currentInput = "";
      operator = "";
    } catch {
      display.innerText = "Error";
      currentInput = "";
      operator = "";
      expression = "";
    }
  } else {
    if (buttonValue.match(/[+\-x/]/)) {
      if (currentInput) {
        expression += currentInput;
      }
      expression += buttonValue;
      currentInput = "";
    } else {
      currentInput += buttonValue;
    }
    display.innerText = expression + currentInput;
  }
}
