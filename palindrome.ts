function repeatChar(char:string,count:number):string{
    let result='';
    for (let i=0;i<count;i++) {
        result+=char;
    }
    return result;
}
function isPalindrome(s:string):boolean {
    return s===s.split('').reverse().join('');
}
function replacePalindromes(input:string):string {
    const words=input.split(' '); 
    for(let i=0;i< words.length;i++) {
        if(isPalindrome(words[i])) { 
            words[i]=repeatChar('*',words[i].length); 
        }
    }
    return words.join(' '); 
}
const inputStr:string="bob has a radar plane";
const result:string=replacePalindromes(inputStr);
console.log(result);

// sample input and output  
// PS D:\typescript\Day 2> tsc palin.ts 
// PS D:\typescript\Day 2> node palin.js
// *** has * ***** plane
