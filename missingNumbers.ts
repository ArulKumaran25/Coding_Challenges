function findMissingNumbers(arr: number[], start: number, end: number): number[] {
    let missingNumbers:number[]=[];
    let numberSet=new Set(arr);
    
    for (let i=start;i<=end;i++) {
        if(!numberSet.has(i)){
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

const arr1=[1, 2, 4, 6, 7];
console.log(findMissingNumbers(arr1, 1, 7));  // Output: [3, 5]

const arr2=[3, 5, 6, 9];
console.log(findMissingNumbers(arr2, 3, 9));  // Output: [4, 7, 8]