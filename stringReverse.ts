// Write a function that takes a string and returns it reversed.

import { log } from "console";

function stringReverse(str:string):string{
    return str.split('').reverse().join('');
}
console.log(stringReverse("Chain-Sys"));



