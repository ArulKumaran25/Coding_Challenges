// Write a function that returns the sum of an array of numbers.
function sumOfArray(arr) {
    return arr.reduce(function (sum, num) { return sum + num; }, 0);
}
var example = [1, 2, 3, 4, 5];
console.log(sumOfArray(example));
