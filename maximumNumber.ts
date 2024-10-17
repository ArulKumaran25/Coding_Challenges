// Find the Maximum Number in an Array(Write a function that takes an array of numbers and returns the maximum number.)function lesserNumber(ar:number[],n:number):number{

const arr=require('prompt-sync')();
const get_input=arr("Enter the number: ");
console.log(get_input,typeof(get_input));

const tonumber=parseInt(get_input)
console.log(tonumber,typeof(tonumber))











// for(let i=0;i<get_input.length;i++){
//     convertArray.push(get_input[i]);
// }
// console.log(convertArray,typeof(convertArray));


// const resultOfMaximumNumber=maximumNumber(convertArray)
// function maximumNumber(arr) {
//     return Math.max.apply(Math,arr);
// }

// var example1 = [1,2,3,4,5];
// var example2 =[5,6,7,8,9];
// console.log(maximumNumber(example1));
// console.log(maximumNumber(example2));

// const prompt = require('prompt-sync')();

// function maximumNumber(arr) {
//     return Math.max.apply(Math, arr);
// }

// // Get user input
// var example1 = prompt("Enter numbers for the first array, separated by commas: ").split(',').map(Number);
// var example2 = prompt("Enter numbers for the second array, separated by commas: ").split(',').map(Number);

// console.log(maximumNumber(example1));
// console.log(maximumNumber(example2));




const prompt = require('prompt-sync')();

// Function to find the maximum number
function maximumNumber(arr) {
    return Math.max.apply(Math, arr);
}

// Get user input
var userInput1 = prompt("Enter numbers for the first array, separated by commas: ");
var userInput2 = prompt("Enter numbers for the second array, separated by commas: ");

// Convert the input strings into arrays of numbers
var example1 = userInput1.split(',').map(Number);
var example2 = userInput2.split(',').map(Number);

// Find and print the maximum numbers
console.log("Maximum in the first array:", maximumNumber(example1));
console.log("Maximum in the second array:", maximumNumber(example2));

