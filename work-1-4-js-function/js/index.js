const add = (a, b) => {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
}

const mul = (a, b) => {
  return a * b;
}

const div = (a, b) => {
  if (b === 0) {
    console.error("Error")
    return;
  }
  return a / b;
}

function calculate(num1, num2, callback, show) {
  show(callback(num1, num2));
}

const op1 = parseFloat(prompt("value 1")), 
  op2 = parseFloat(prompt("value 2")),
  sign = prompt("sign");

function show(data) {
  document.getElementById("display").innerHTML = data;
}

switch(sign) {
  case "+" : calculate(op1, op2, add, show)
    break;
  case "-" : calculate(op1, op2, sub, show)
    break;
  case "*" : calculate(op1, op2, mul, show)
    break;
  case "/" : calculate(op1, op2, div, show)
    break;
}
