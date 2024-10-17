// function findDuplicates(arr: number[]): number[] {
//     const seen = new Set<number>();
//     const duplicates = new Set<number>();
//     for (const num of arr) {
//         if (seen.has(num)) {
//             duplicates.add(num);
//         } else {
//             seen.add(num);
//         }
//     }
//     return Array.from(duplicates);
// }
// const exampleArray = [1, 2, 3, 4, 5, 1, 2, 6];
// console.log("Duplicate elements:", findDuplicates(exampleArray));
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
// Example usage:
var exampleArray = [1, 2, 3, 4, 5, 1, 2, 6];
var uniqueArray = removeDuplicates(exampleArray);
console.log("Array with duplicates removed:", uniqueArray);
