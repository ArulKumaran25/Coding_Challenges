function sumOfDigits(num:number):number{
    return num.toString().split('').reduce((sum,digit)=> sum+parseInt(digit),0);
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(5678));

