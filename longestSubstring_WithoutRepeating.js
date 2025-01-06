// Write a function longestSubstringWithoutRepeatingCharacters that takes
//  a string as input and returns the longest substring without repeating characters.
// Example 1:
// Input: abcabcbb
// Output: abc
// Example 2:
// Input: dvdf
// Output: vdf
function longestSubstringWithoutRepeatingCharacters(s) {
    var charMap = new Map();
    var start = 0;
    var maxLen = 0;
    var maxSubstr = "";
    for (var end = 0; end < s.length; end++) {
        if (charMap.has(s[end]) && charMap.get(s[end]) >= start) {
            start = charMap.get(s[end]) + 1;
        }
        charMap.set(s[end], end);
        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1;
            maxSubstr = s.substring(start, end + 1);
        }
    }
    return maxSubstr;
}
console.log(longestSubstringWithoutRepeatingCharacters("abcdabc"));
console.log(longestSubstringWithoutRepeatingCharacters("ddefgh"));
