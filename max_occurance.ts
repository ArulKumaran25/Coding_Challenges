// Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. 
// Find out the alphabet with maximum occurrence.

function countaplh(input:string):{[key:string]:number} 
{
    const occurrences:{[key:string]:number}={};
    const lowerCaseInput=input.toLowerCase();
    for(const char of lowerCaseInput) {
        if(/[a-z]/.test(char)){
            occurrences[char]=(occurrences[char] || 0) + 1;
        }
    }
    return occurrences;

console.log(occurrences);
}
function MaxOccur(occurrences:{[key:string]:number}):{maxChar:string,maxCount:number}
 {
    var maxChar='';
    var maxCount=0;
    for(const char in occurrences) {
        if(occurrences[char]>maxCount) {
            maxChar=char;
            maxCount=occurrences[char];
        }
    }
    return {maxChar,maxCount};
}
const inputString="Chainsys";
const occurrences=countaplh(inputString);
const maxChar=MaxOccur(occurrences);
console.log(occurrences);
console.log(maxChar);

// sample input and output:
// PS D:\typescript\Day 2> tsc alphabet.ts
// PS D:\typescript\Day 2> node alphabet.js
// { c: 1, h: 1, a: 1, i: 1, n: 1, s: 2, y: 1 }
// { maxChar: 's', maxCount: 2 }








