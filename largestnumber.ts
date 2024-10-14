function findLargestNumbers(arr:number[]):number{
    return Math.max(...arr);
}

const numbers=[1,5,6,12,3];
console.log(findLargestNumbers(numbers));
