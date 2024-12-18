"use strict";
// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Hint
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.
Object.defineProperty(exports, "__esModule", { value: true });
function isPrefixOfWord(sentence, searchword) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchword)) {
            return i + 1;
        }
    }
    return -1;
}
var sentence1 = 'I Love TypeScript';
var searchWord1 = 'Type';
console.log(isPrefixOfWord(sentence1, searchWord1));
var sentence2 = 'Thankyou for your understanding';
var searchWord2 = 'Thank';
console.log(isPrefixOfWord(sentence2, searchWord2));
