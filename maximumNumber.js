// Find the Maximum Number in an Array(Write a function that takes an array of numbers and returns the maximum number.)function lesserNumber(ar:number[],n:number):number{
var arr = require('prompt-sync')();
var get_input = arr("Enter the number: ");
console.log(get_input, typeof (get_input));
var convertArray = [];
var tonumber = parseInt(get_input);
console.log(tonumber, typeof (tonumber));
for (var i = 0; i < get_input.length; i++) {
    convertArray.push(get_input[i]);
}
console.log(convertArray, typeof (convertArray));
// const resultOfMaximumNumber=maximumNumber(convertArray)
// function maximumNumber(arr) {
//     return Math.max.apply(Math,arr);
// }
// var example1 = [1,2,3,4,5];
// var example2 =[5,6,7,8,9];
// console.log(maximumNumber(example1));
// console.log(maximumNumber(example2));
