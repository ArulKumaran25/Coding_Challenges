import { log } from "console";

function countOfNumber(start:number,end:number,n:number):number{
    let count=0;
    for(let i=start;i<end;i++){
        if(i%n==0){  // check if then is divisible by n 
            count++;
        }
    }
    return count++;
}
const start=5;
const end=12;
const n=5;
console.log(countOfNumber(start,end,n));

