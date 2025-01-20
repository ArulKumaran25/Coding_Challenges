// Product of Array Except Self
// Problem:
// Given an array of numbers, return an array where each element is the product of all the numbers in the original array except the number at that index.
// You cannot use division and must solve it in O(n) time complexity.
// Example:
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
function productExceptSelf(nums) {
    var n = nums.length;
    var result = new Array(n);
    var leftProduct = 1;
    for (var i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    var rightProduct = 1;
    for (var i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));
