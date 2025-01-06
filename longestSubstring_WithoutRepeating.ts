// Write a function longestSubstringWithoutRepeatingCharacters that takes
//  a string as input and returns the longest substring without repeating characters.

// Example 1:
// Input: abcabcbb
// Output: abc

// Example 2:
// Input: dvdf
// Output: vdf

function longestSubstringWithoutRepeatingCharacters(s:string):string {
    let charMap:Map<string,number>=new Map();
    let start=0;
    let maxLen=0;
    let maxSubstr="";
    for (let end=0;end<s.length;end++) {
        if(charMap.has(s[end])&&charMap.get(s[end])!>=start) {
            start=charMap.get(s[end])!+1;
        }
        charMap.set(s[end],end);
        if (end-start+1>maxLen) {
            maxLen=end-start+1;
            maxSubstr=s.substring(start,end+1);
        }
    }
    return maxSubstr;
}
console.log(longestSubstringWithoutRepeatingCharacters("abcdabc")); 
console.log(longestSubstringWithoutRepeatingCharacters("ddefgh"));
