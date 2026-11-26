  var display = document.getElementById("display");
  var firstNumber = "";      // number typed before the operator
  var operator = "";         // + , - or ×
  var secondNumber = "";     // number typed after the operator

  function pressNumber(num) {
    // Add digit to the first or second number
    if (operator === "") {
      if (num === "." && firstNumber.includes(".")) return;
      firstNumber = firstNumber + num;
      display.value = firstNumber;
    } else {
      if (num === "." && secondNumber.includes(".")) return;
      secondNumber = secondNumber + num;
      display.value = firstNumber + " " + operator + " " + secondNumber;
    }
  }

  function pressOperator(op) {
    if (firstNumber === "") return;           // need a first number first
    if (secondNumber !== "") calculate();     // finish previous calculation
    operator = op;
    display.value = firstNumber + " " + operator;
  }

  function calculate() {
    if (firstNumber === "" || operator === "" || secondNumber === "") return;

    var a = parseFloat(firstNumber);
    var b = parseFloat(secondNumber);
    var result = 0;

    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "×") result = a * b;

    result = Math.round(result * 1000000) / 1000000;  // avoid 0.1+0.2 issue

    display.value = result;
    firstNumber = String(result);   // result can be used for next calculation
    operator = "";
    secondNumber = "";
  }

  function clearAll() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    display.value = "0";
  }
