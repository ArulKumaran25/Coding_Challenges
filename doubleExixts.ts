// 1346. Check If N and Its Double Exist
// Easy
// Topics
// Companies
// Hint
// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 
// Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

function doubleExist(arr: number[]): boolean {
    const double= new Set<number>();
    
    for(const num of arr){
        // Check if double or half exists
        if(double.has(2 * num) || (num % 2 === 0 && double.has(num / 2))) 
            {
            return true;
            }
        // Add the current number to the set
        double.add(num);
    }
    return false;
}
// Example 
const arr1: number[] = [2,3,5];
console.log(doubleExist(arr1));
const arr2: number[] = [3,1,7,11,6];
console.log(doubleExist(arr2)); 
