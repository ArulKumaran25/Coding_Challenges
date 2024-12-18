// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Hint
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.
 
// Example 1:
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// Example 2:
// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.


import { log } from "console";

function isPrefixOfWord(sentence:string,searchword:string):number{
    const words:string[]=sentence.split(" ");

    for(let i=0;i<words.length;i++){
        if(words[i].startsWith(searchword)){
            return i+1;
        }
    }
    return -1;
}

const sentence1:string='I Love TypeScript';
const searchWord1:string='Type';
console.log(isPrefixOfWord(sentence1,searchWord1));

const sentence2:string='Thankyou for your understanding';
const searchWord2:string='Thank';
console.log(isPrefixOfWord(sentence2,searchWord2));

