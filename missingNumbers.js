function findMissingNumbers(arr, start, end) {
    var missingNumbers = [];
    var numberSet = new Set(arr);
    for (var i = start; i <= end; i++) {
        if (!numberSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
var arr1 = [1, 2, 4, 6, 7];
console.log(findMissingNumbers(arr1, 1, 7)); // Output: [3, 5]
var arr2 = [3, 5, 6, 9];
console.log(findMissingNumbers(arr2, 3, 9)); // Output: [4, 7, 8]
