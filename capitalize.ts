import { log } from "console"

function capitalize (str:string):string{
    return str.split(' ')
    .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
    .join(' ')
}
console.log(capitalize("hello world from typescript"));

