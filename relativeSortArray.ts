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


function relativeSortArray(arr1:number[],arr2:number[]):number[] {
    const orderMap=new Map<number,number>();
    arr2.forEach((value,index)=>{
        orderMap.set(value,index);
    });
    arr1.sort((a,b)=>{
        if(orderMap.has(a)&&orderMap.has(b)) {
            return(orderMap.get(a)??0)-(orderMap.get(b)??0);
        }
        if(orderMap.has(a)) 
            return -1;
        if(orderMap.has(b)) 
            return 1;
        return a-b;
    });
    return arr1;
}

const arr1=[1,2,3,4];
const arr2=[5,6,7,4];
console.log(relativeSortArray(arr1,arr2));

const arr1_2=[28,6,22,8,44,17];
const arr2_2=[22,28,8,6];
console.log(relativeSortArray(arr1_2,arr2_2));
