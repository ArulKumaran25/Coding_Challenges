function lesserNumber(ar:number[],n:number):number{
    let sum=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]<n){
            sum+=ar[i];
        }
    }
    return sum;
}
const example=[1,2,3,4,5];
const n=3;
console.log(lesserNumber(example,n));
