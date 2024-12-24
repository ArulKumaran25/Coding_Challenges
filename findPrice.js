// 1475. Final Prices With a Special Discount in a Shop
// Easy
// Topics
// Companies
// Hint
// You are given an integer array prices where prices[i] is the price of the ith item in a shop.
// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.
// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Example 1:
// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation: 
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.
// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.
// Example 3:
// Input: prices = [10,1,1,6]
// Output: [9,0,1,6]
function finalPrices(prices) {
    var n = prices.length;
    var answer = __spreadArray([], prices, true);
    var stack = [];
    for (var i = 0; i < n; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            var index = stack.pop();
            answer[index] -= prices[i];
        }
        stack.push(i);
    }
    return answer;
}
var prices1 = [8, 4, 6, 2, 3];
console.log(finalPrices(prices1)); // Output: [4, 2, 4, 2, 3]
var prices2 = [1, 2, 3, 4, 5];
console.log(finalPrices(prices2)); // Output: [1, 2, 3, 4, 5]
var prices3 = [10, 1, 1, 6];
console.log(finalPrices(prices3)); // Output: [9, 0, 1, 6]
