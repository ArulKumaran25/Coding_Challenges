function findMaxConsecutiveOnes(nums) {
    var maxCount = 0; // To store the maximum number of consecutive 1s
    var currentCount = 0; // To track the current sequence of 1s
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num === 1) {
            currentCount++; // Increment the count for consecutive 1s
            maxCount = Math.max(maxCount, currentCount); // Update maxCount if needed
        }
        else {
            currentCount = 0; // Reset the count when a 0 is encountered
        }
    }
    return maxCount; // Return the maximum count found
}
// Example 1
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
// Example 2
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1])); // Output: 4
