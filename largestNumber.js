function findLargestNumbers(arr) {
    return Math.max.apply(Math, arr);
}
var numbers = [1, 5, 6, 12, 3];
console.log(findLargestNumbers(numbers));
