const num1 = parseFloat(prompt("Enter First Number"));
const oper = prompt("Enter an Operater ( +, -, *, / )");
const num2 = parseFloat(prompt("Enter Second Number"));

let result;

if (oper === "+") {
  result = num1 + num2;
} else if (oper === "-") {
  result = num1 - num2;
} else if (oper === "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}
console.log(`${num1} ${oper} ${num2} = ${result}`);
