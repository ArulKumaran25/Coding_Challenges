// Write a function that returns the sum of an array of numbers.

function sumOfArray(arr:number[]): number{
    return arr.reduce((sum,num)=>sum+num,0);

}
const example=[1,2,3,4,5];
console.log(sumOfArray(example));
