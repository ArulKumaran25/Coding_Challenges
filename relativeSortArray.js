// 1122. Relative Sort Array
// Hint
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:
// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]
// Constraints:
// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.
function relativeSortArray(arr1, arr2) {
    var orderMap = new Map();
    arr2.forEach(function (value, index) {
        orderMap.set(value, index);
    });
    arr1.sort(function (a, b) {
        var _a, _b;
        if (orderMap.has(a) && orderMap.has(b)) {
            return ((_a = orderMap.get(a)) !== null && _a !== void 0 ? _a : 0) - ((_b = orderMap.get(b)) !== null && _b !== void 0 ? _b : 0);
        }
        if (orderMap.has(a))
            return -1;
        if (orderMap.has(b))
            return 1;
        return a - b;
    });
    return arr1;
}
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 4];
console.log(relativeSortArray(arr1, arr2));
var arr1_2 = [28, 6, 22, 8, 44, 17];
var arr2_2 = [22, 28, 8, 6];
console.log(relativeSortArray(arr1_2, arr2_2));
