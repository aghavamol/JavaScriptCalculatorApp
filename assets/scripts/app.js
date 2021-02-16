const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
  userInput.value = "";
  userInput.focus();
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  if (
    calculationType !== "Add" &&
    calculationType !== "Subtract" &&
    calculationType !== "Multiply" &&
    calculationType !== "Divide"
  ) {
    return;
  }
  
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "Add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "Divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, enteredNumber, currentResult);
}

function add() {
  calculateResult("Add");
}

function subtract() {
  calculateResult("Subtract");
}

function multiply() {
  calculateResult("Multiply");
}

function divide() {
  calculateResult("Divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
