function repeatChar(char, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += char;
    }
    return result;
}
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
function replacePalindromes(input) {
    var words = input.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            words[i] = repeatChar('*', words[i].length);
        }
    }
    return words.join(' ');
}
var inputStr = "bob has a radar plane";
var result = replacePalindromes(inputStr);
console.log(result);
// sample input and output  
// PS D:\typescript\Day 2> tsc palin.ts 
// PS D:\typescript\Day 2> node palin.js
// *** has * ***** plane
