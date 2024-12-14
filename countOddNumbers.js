// Problem: Count Numbers with Odd Digits in a Range
// Write a TypeScript function to count how many numbers in a given range have only odd digits.
function countNumbersWithOddDigits(start, end) {
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (hasOnlyOddDigits(i)) {
            count++;
        }
    }
    return count;
}
function hasOnlyOddDigits(num) {
    while (num > 0) {
        var digit = num % 10;
        if (digit % 2 === 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
// Example usage:
var start = 1;
var end = 12;
var result = countNumbersWithOddDigits(start, end);
console.log(result);
