import { log } from "console";

function countOccurance(ar:number[],n:number):number{
    let count=0;
    for (let i=0; i<ar.length;i++) {
        if(ar[i]===n){
            count++;
        }
    }
    return count;
}
const example=[1,2,1,2,3,4,1];
const n=3;
console.log(countOccurance(example,n));
