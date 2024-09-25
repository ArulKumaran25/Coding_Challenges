// Write a program that reads an array of ints and outputs the length of the
// longest sequence in strictly ascending order. Print the elements of longest
// ascending sequence in an array Elements of the sequence must go one after
// another. A single number is assumed to be an ordered sequence with the length= 1.

// Enter the number of elements 
// 5
// Enter 5 numbers in any order to find the longest ascending sequence

// 45
// 40
// 0
// 39
// 10
// The max value is : 2
// 2numbers in ascending order
// 0 39

function longestAscendingSequence(arr:number[]):{length:number,sequence:number[]} {
    if(arr.length===0) 
        return{length:0,sequence:[]};
    let maxLength=1;
    let currentLength=1;
    let startId=0;
    let maxStartId=0;
    for (let i=1;i<arr.length;i++) {
        if(arr[i]>arr[i-1]){
            currentLength++;
        } else{
            if(currentLength>maxLength) {
                maxLength=currentLength;
                maxStartId=startId;
            }
            currentLength=1;
            startId=i;
        }
    }
    if(currentLength>maxLength) {
        maxLength=currentLength;
        maxStartId=startId;
    }
    const sequence=arr.slice(maxStartId,maxStartId+maxLength);
    return{length:maxLength,sequence};
}

function ascending() {
    const arr:number[]=[45,40,0,39,10];
    console.log(`given input array:${arr.join(' ')}`);
    const result=longestAscendingSequence(arr);
    console.log(`max value is:${result.length}`);
    console.log(`${result.length}nums in ascending order`);
    console.log(result.sequence.join(' '));
}
ascending();
