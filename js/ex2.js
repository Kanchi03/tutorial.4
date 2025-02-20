/* Tutorial.4
Example 2 JavaScript code
*/
// Function to convert Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
}
// Test case 1: Water's boiling point
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);

// Test case 2: Freezing point
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees Celsius`);

// Test case 3: Body temperature with 2 decimal formatting
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7).toFixed(2)} degrees Celsius`);
console.log("Kanchi's Output from Tutorial.4 Example 2");