// You have to print the count of numbers which are not divided by n within the given range.

// Input:
// start = 5;
// end = 12;
// n = 5;
// output:
// 7

// Explanation:
// 6,7,8,9,10,11,12 are not divided by 5. So, its count is 7


function countNotDivisibleByN(start: number,end: number,n: number):number{
    let count = 0;
    for(let i = start; i <= end; i++) {
        if(i%n!==0) 
        {
            count++;
        }
    }
    return count;
}


// Example usage:

const start = 5;
const end = 10;
const n = 2;
const result = countNotDivisibleByN(start, end, n);
console.log(result); 
