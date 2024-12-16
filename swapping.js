"use strict";
// Declare two variables x and y with numerical values. Swap their values without using a third variable
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); // Import readline for user input
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Read user input
r.question('Enter two numbers (a and b) separated by space to swap: ', function (values) {
    var a = Number(values.split(' ')[0]);
    var b = Number(values.split(' ')[1]);
    // Swap logic without a third variable
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Swapped values: a = ".concat(a, ", b = ").concat(b));
    // Close the readline interface
    r.close();
});
// Function to swap numbers
function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Swapped values using function: a = ".concat(a, ", b = ").concat(b));
}
// Example function call
swapNumbers(5, 3); // Output: Swapped values using function: a = 3, b = 5
