/* Tutorial.4
Example 9 JavaScript code
*/
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0; // Counter to track the number of guesses
let guessedCorrectly = false; // Flag to check if the user guessed correctly

console.log("Welcome to the Guess a Number game!");
console.log("I've picked a number between 1 and 100. Try to guess it!");

// Loop until the user guesses the correct number
while (!guessedCorrectly) {
    // Ask the user for their guess
    const guess = parseInt(prompt("Enter your guess:"));

    // Increment the attempt counter
    attempts++;

    // Provide feedback based on the guess
    if (guess < randomNumber) {
        console.log("Too low, guess again.");
    } else if (guess > randomNumber) {
        console.log("Too high, guess again.");
    } else {
        console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
        guessedCorrectly = true; // Exit the loop
    }
}
console.log("Kanchi's Output from Tutorial.4 Example 9");