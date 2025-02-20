/* Tutorial.4
Example 3 JavaScript code
*/
// Get radius from user
const r = Number(prompt("Enter the circle radius:"));

// Create circle object with radius and calculation methods
const circle = {
    radius: r,
    
    circumference() {
        return 2 * Math.PI * this.radius;
    },
    
    area() {
        return Math.PI * this.radius ** 2;
    }
};

// Display results
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
console.log("Kanchi's Output from Tutorial.4 Example 3");