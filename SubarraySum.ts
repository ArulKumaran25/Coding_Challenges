// 560. Subarray Sum Equals K
// Medium
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
 
// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

function subarraySum(nums:number[],k:number):number {
    let count=0;
    nums.forEach((_,startIndex)=>{
        let sum=0;
        nums.slice(startIndex).forEach((num)=>{
            sum+=num;
            if(sum===k) {
                count++;
            }
        });
    });
    return count;
}

const nums1=[1,1,1];
const k1=2;
console.log(subarraySum(nums1,k1));
const nums2=[1,2,3,4];
const k2=10;
console.log(subarraySum(nums2,k2));
