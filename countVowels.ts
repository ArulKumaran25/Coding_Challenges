import { count } from "console";

function CountOfVowels(s:string):number{
    const vowels='aeiouAEIOU';
    return s.split('').filter(char=>vowels.includes(char)).length;
}

console.log(CountOfVowels("Hello Chain-sys"));
