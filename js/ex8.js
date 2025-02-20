/* Tutorial.4
Example 8 JavaScript code
*/
// Function to compute the number of vowels in a word
function countVowels(word) {
    const vowels = "aeiouy";
    let vowelCount = 0;

    // Convert the word to lowercase for case insensitivity
    word = word.toLowerCase();

    // Iterate through each character in the word
    for (let char of word) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Function to determine if a word is a palindrome
function isPalindrome(word) {
    // Convert the word to lowercase for case insensitivity
    word = word.toLowerCase();

    // Compare the word to its reverse
    return word === word.split("").reverse().join("");
}

// Ask the user for a word
const word = prompt("Enter a word:");

// Compute the number of vowels
const vowelCount = countVowels(word);

// Check if the word is a palindrome
const palindromeCheck = isPalindrome(word);

// Display the results
if (palindromeCheck) {
    console.log(`${word} contains ${vowelCount} vowels and is a palindrome.`);
} else {
    console.log(`${word} contains ${vowelCount} vowels and is not a palindrome.`);
}
console.log("Kanchi's Output from Tutorial.4 Example 8");