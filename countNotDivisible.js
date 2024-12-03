// You have to print the count of numbers which are not divided by n within the given range.
// Input:
// start = 5;
// end = 12;
// n = 5;
// output:
// 7
// Explanation:
// 6,7,8,9,10,11,12 are not divided by 5. So, its count is 7
function countNotDivisibleByN(start, end, n) {
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (i % n !== 0) {
            count++;
        }
    }
    return count;
}
// Example usage:
var start = 5;
var end = 10;
var n = 2;
var result = countNotDivisibleByN(start, end, n);
console.log(result); // Output: 7
