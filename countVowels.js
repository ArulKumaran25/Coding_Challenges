"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CountOfVowels(s) {
    var vowels = 'aeiouAEIOU';
    return s.split('').filter(function (char) { return vowels.includes(char); }).length;
}
console.log(CountOfVowels("Hello Chain-sys"));
