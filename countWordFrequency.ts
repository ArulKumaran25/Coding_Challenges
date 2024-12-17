import { log } from "console";
function countWordFrequency(inputString:string):{[key:string]:number}
{
    const words:string[]=inputString.split(" ");
    const wordCount:{[key:string]:number}={};

    for(const word of words){
        if(wordCount[word]){
            wordCount[word]+=1;
        }
        else{
            wordCount[word]=1;
        }
    }
    return wordCount;
}
const inputString="this is a only this is one this one";
const result=countWordFrequency(inputString);
console.log(result);
