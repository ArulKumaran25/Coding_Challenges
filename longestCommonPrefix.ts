let input=require('prompt-sync')();
var s:string=input("Enter a string : ")
let stringAr:string[] = s.split(' ');
let index:number=0;
let min:number=100;
for(var s of stringAr){
    if(s.length<min)
        min=s.length
}
let ans:string = "";
let flag:number=0;
for(let i:number=0;i<min;i++){
    flag = 0;
    for(let j:number=0;j<stringAr.length-1;j++){
        if(stringAr[j][i]==stringAr[j+1][i]){
            flag=1;
        }
        else{
            flag=0;
            break;
        }
    }
    if(flag == 1)
        ans+=stringAr[0][i];
    else
        break
}
console.log(ans);