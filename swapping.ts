// Declare two variables x and y with numerical values. Swap their values without using a third variable

import * as readline from 'readline'; //input from user

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question('Enter a and  b to swap ', (values: string) => {
    var a:number=Number(values.split(" ")[0]);
    var b:number=Number(values.split(" ")[1]);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b);
   
});

function swapNumbers(a:number,b:number){ //using functions
    var a=a+b;
    var b=a-b;
    var a=a-b;
    console.log(a,b);
}
swapNumbers(5,3);