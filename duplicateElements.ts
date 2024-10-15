function removeDuplicates(array:number[]):number[]{
    return [...new Set(array)];
}

const array=[1,2,2,3,4,4,5];
console.log(removeDuplicates(array));

