"use strict";
// Declare two variables x and y with numerical values. Swap their values without using a third variable
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question('Enter a and  b to swap ', function (values) {
    var a = Number(values.split(" ")[0]);
    var b = Number(values.split(" ")[1]);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
});
function swapNumbers(a, b) {
    var a = a + b;
    var b = a - b;
    var a = a - b;
    console.log(a, b);
}
swapNumbers(5, 3);
