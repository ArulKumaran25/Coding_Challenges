"use strict";
// 1394. Find Lucky Integer in an Array
// Hint
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
Object.defineProperty(exports, "__esModule", { value: true });
// Return the largest lucky integer in the array. If there is no lucky integer return -1.
// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
// Constraints:
// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500
function findLucky(arr) {
    var frequencyMap = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    var largestLucky = -1;
    // Iterate through the frequency map
    for (var _a = 0, _b = Object.entries(frequencyMap); _a < _b.length; _a++) {
        var _c = _b[_a], key = _c[0], value = _c[1];
        var number = parseInt(key, 10);
        if (number === value) {
            largestLucky = Math.max(largestLucky, number);
        }
    }
    return largestLucky;
}
console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3, 1]));
console.log(findLucky([1, 1, 2, 3, 4]));
