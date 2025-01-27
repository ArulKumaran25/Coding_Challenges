function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount=0; // To store the maximum number of consecutive 1s
    let currentCount=0; // To track the current sequence of 1s

    for (const num of nums) {
        if (num === 1) {
            currentCount++; // Increment the count for consecutive 1s
            maxCount = Math.max(maxCount, currentCount); // Update maxCount if needed
        } else {
            currentCount=0; // Reset the count when a 0 is encountered
        }
    }

    return maxCount; // Return the maximum count found
}

// Example 1
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3

// Example 2
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1])); // Output: 4
