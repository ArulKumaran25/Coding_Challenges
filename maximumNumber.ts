// Find the Maximum Number in an Array(Write a function that takes an array of numbers and returns the maximum number.)function lesserNumber(ar:number[],n:number):number{

// const arr=require('prompt-sync')();
// const get_input=arr("Enter the number: ");
// console.log(get_input,typeof(get_input));

// const tonumber=parseInt(get_input)
// console.log(tonumber,typeof(tonumber))

let prompt=require('prompt-sync')();
var userInput=prompt("Enter an Array");

function maximumNumber(arr) {
    return Math.max.apply(Math,arr);
}
var example1 = [1,2,3,4,5];
console.log(maximumNumber(userInput));






// const prompt = require('prompt-sync')(); // Require prompt-sync for user input

// // Get input from the user
// var userInput = prompt("Enter some input: ");

// console.log("You entered:", userInput);




