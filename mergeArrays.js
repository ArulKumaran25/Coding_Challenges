// You are tasked with implementing a utility function mergeArrays that takes two sorted arrays of numbers and merges them into a single sorted array without duplicates.
// Write a function mergeArrays with the following signature:
// typescript
// function mergeArrays(arr1: number[], arr2: number[]): number[];
// Requirements:
// Both input arrays are sorted in ascending order.
// The output array should also be sorted in ascending order.
// The output array should not contain any duplicates.
// Do not use the Set object to handle duplicates.
// Example Input:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// Expected Output:
// [1, 2, 3, 5, 6, 7, 8, 9]
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2)
        .sort(function (a, b) { return a - b; })
        .filter(function (value, index, array) { return index === 0 || value !== array[index - 1]; });
}
var arr1 = [1, 2, 2, 3, 4];
var arr2 = [5, 6, 7, 7, 8];
var result = mergeArrays(arr1, arr2);
console.log(result);
// function mergeArrays(arr1: number[], arr2: number[]): number[] {
//     const mergedArray: number[] = [];
//     let i = 0, j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             if (mergedArray.length === 0 || mergedArray[mergedArray.length - 1] !== arr1[i]) {
//                 mergedArray.push(arr1[i]);
//             }
//             i++;
//         } else if (arr1[i] > arr2[j]) {
//             if (mergedArray.length === 0 || mergedArray[mergedArray.length - 1] !== arr2[j]) {
//                 mergedArray.push(arr2[j]);
//             }
//             j++;
//         } else {
//             // Both elements are equal
//             if (mergedArray.length === 0 || mergedArray[mergedArray.length - 1] !== arr1[i]) {
//                 mergedArray.push(arr1[i]);
//             }
//             i++;
//             j++;
//         }
//     }
//     // Add remaining elements from arr1
//     while (i < arr1.length) {
//         if (mergedArray.length === 0 || mergedArray[mergedArray.length - 1] !== arr1[i]) {
//             mergedArray.push(arr1[i]);
//         }
//         i++;
//     }
//     // Add remaining elements from arr2
//     while (j < arr2.length) {
//         if (mergedArray.length === 0 || mergedArray[mergedArray.length - 1] !== arr2[j]) {
//             mergedArray.push(arr2[j]);
//         }
//         j++;
//     }
//     return mergedArray;
// }
// // Example usage:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// console.log(result); // Output: [1, 2, 3, 5, 6, 7, 8, 9]
