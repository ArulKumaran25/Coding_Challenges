// Problem: Count Numbers with Odd Digits in a Range
// Write a TypeScript function to count how many numbers in a given range have only odd digits.

function countNumbersWithOddDigits(start:number,end:number):number {
    let count=0;
    for(let i = start; i <= end; i++) {
        if(hasOnlyOddDigits(i)) {
            count++;
        }
    }
    return count;
}
function hasOnlyOddDigits(num:number):boolean {
    while(num>0) {
        const digit=num % 10;
        if(digit%2===0) {
            return false; 
        }
        num=Math.floor(num / 10);
    }
    return true; 
}

// Example usage:
const start=1;
const end=12;
const result=countNumbersWithOddDigits(start, end);
console.log(result); 
