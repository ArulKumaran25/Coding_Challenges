// Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. 
// Find out the alphabet with maximum occurrence.
function countaplh(input) {
    var occurrences = {};
    var lowerCaseInput = input.toLowerCase();
    for (var _i = 0, lowerCaseInput_1 = lowerCaseInput; _i < lowerCaseInput_1.length; _i++) {
        var char = lowerCaseInput_1[_i];
        if (/[a-z]/.test(char)) {
            occurrences[char] = (occurrences[char] || 0) + 1;
        }
    }
    return occurrences;
    console.log(occurrences);
}
function MaxOccur(occurrences) {
    var maxChar = '';
    var maxCount = 0;
    for (var char in occurrences) {
        if (occurrences[char] > maxCount) {
            maxChar = char;
            maxCount = occurrences[char];
        }
    }
    return { maxChar: maxChar, maxCount: maxCount };
}
var inputString = "Chainsys";
var occurrences = countaplh(inputString);
var maxChar = MaxOccur(occurrences);
console.log(occurrences);
console.log(maxChar);
// sample input and output:
// PS D:\typescript\Day 2> tsc alphabet.ts
// PS D:\typescript\Day 2> node alphabet.js
// { c: 1, h: 1, a: 1, i: 1, n: 1, s: 2, y: 1 }
// { maxChar: 's', maxCount: 2 }
