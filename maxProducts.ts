// Max Product of Two Elements
// Problem:
// Given an integer array nums, find the maximum product of any two elements in the array.
// Example 1:
// Input: 
// nums = [1, 5, 2, 9]
// Output: 
// 45 (Because 5 * 9 = 45)

// Example 2:
// Input:
// nums = [-10, -3, 5, 6, -2]
// Output:
// 30


// approach 1

function maxProducts(nums:number[]):number 
{
    nums.sort((a,b)=>a-b);
    const n=nums.length;
    return Math.max(nums[n-1]*nums[n-2],nums[0]*nums[1]);
}
console.log(maxProducts([1,5,2,9])); 
console.log(maxProducts([-10,-3,5,6,-2]));


//approach 2

function maxProduct(nums:number[]):number {
    let max1=-Infinity,max2=-Infinity;
    let min1=Infinity,min2=Infinity;

    for (const num of nums) {
        // Update largest numbers
        if (num>max1) {
            max2=max1;
            max1=num;
        } else if (num>max2) {
            max2=num;
        }
        // Update smallest numbers
        if (num<min1) {
            min2=min1;
            min1=num;
        } else if (num<min2) {
            min2=num;
        }
    }
    return Math.max(max1*max2,min1*min2);
}
console.log(maxProduct([1,5,2,9]));
console.log(maxProduct([-10,-3,5,6,-2]));

