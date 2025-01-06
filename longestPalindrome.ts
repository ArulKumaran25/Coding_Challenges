function longestPalindromicSubstring(s:string):string{
    if(s.length===0)
        return "";
    let longest="";
    const expandAroundCenter=(left:number,right:number)=>{
        while (left>=0 && right<s.length && s[left]===s[right]) {
            const currentPalindrome=s.slice(left, right + 1);
            if(currentPalindrome.length>longest.length) {
                longest=currentPalindrome;
            }
            left--;
            right++;
        }
    };
    for (let i=0;i<s.length;i++) {
        expandAroundCenter(i,i);
        expandAroundCenter(i,i + 1);
    }
    return longest;
}
console.log(longestPalindromicSubstring("babad"));      // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd"));       // Output: "bb"
console.log(longestPalindromicSubstring("abazzazz"));   // Output: "zzazz"
