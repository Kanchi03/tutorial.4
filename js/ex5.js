/* Tutorial.4
Example 5 JavaScript code
*/
const values = [3, 11, 7, 2, 9, 10];

// Initialize variables
let sum = 0;
let min = values[0]; // Assume the first element is the minimum
let max = values[0]; // Assume the first element is the maximum

// Iterate through the array
for (let i = 0; i < values.length; i++) {
    // Calculate the sum
    sum += values[i];

    // Find the minimum value
    if (values[i] < min) {
        min = values[i];
    }

    // Find the maximum value
    if (values[i] > max) {
        max = values[i];
    }
}

// Display the results
console.log("Sum of all array values:", sum);
console.log("Minimum value:", min);
console.log("Maximum value:", max);
console.log("Kanchi's Output from Tutorial.4 Example 5");