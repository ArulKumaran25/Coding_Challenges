// Find the Maximum Number in an Array(Write a function that takes an array of numbers and returns the maximum number.)function lesserNumber(ar:number[],n:number):number{
// const arr=require('prompt-sync')();
// const get_input=arr("Enter the number: ");
// console.log(get_input,typeof(get_input));
// const tonumber=parseInt(get_input)
// console.log(tonumber,typeof(tonumber))
function maximumNumber(arr) {
    return Math.max.apply(Math, arr);
}
var example1 = [1, 2, 3, 4, 5];
var example2 = [5, 6, 7, 8, 9];
console.log(maximumNumber(example1));
console.log(maximumNumber(example2));
