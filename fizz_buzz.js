"use strict";
// Write a program that prints the numbers from 1 to 100. But for multiples of three, 
// print "Fizz" instead of the number and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz".
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question('Please enter something: ', function (n) {
    var range = Number(n);
    for (var i = 1; i <= range; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
});
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }  
//     }
