/* Tutorial.4
Example 7 JavaScript code
*/
let words = [];
let userInput;

while (true) {
    userInput = prompt("Enter a word (type 'stop' to finish):").trim();
    
    if (userInput.toLowerCase() === "stop") {
        break; // Exit the loop if "stop" (case insensitive) is entered
    }
    
    words.push(userInput); // Add word to array
}

// Display results
if (words.length === 0) {
    console.log("No words to display, 'stop' was the first word entered.");
} else {
    console.log("You entered the following words:");
    words.forEach(word => console.log(word));
}
console.log("Kanchi's Output from Tutorial.4 Example 7");