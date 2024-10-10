function longestPalindromicSubstring(s) {
    if (s.length === 0)
        return "";
    var longest = "";
    var expandAroundCenter = function (left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            var currentPalindrome = s.slice(left, right + 1);
            if (currentPalindrome.length > longest.length) {
                longest = currentPalindrome;
            }
            left--;
            right++;
        }
    };
    for (var i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }
    return longest;
}
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"
console.log(longestPalindromicSubstring("abazzazz")); // Output: "zzazz"
