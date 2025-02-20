/* Tutorial.4
Example 1 JavaScript code
*/
function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    return `${num1} ${operation} ${num2} = ${result}`;
}

// Get user input using separate prompts
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):");

// Call function and display result
let result = calculate(number1, number2, operation);
console.log(result);
console.log("Kanchi's Output from Tutorial.4 Example 1");