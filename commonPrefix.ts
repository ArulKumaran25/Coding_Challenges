// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
 
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function commonPrefix(str:string[]):string{
    if(str.length===0)
        return " ";
    let prefix=str[0];
    for (let i = 1; i < str.length; i++) {
        while(str[i].indexOf(prefix)!==0){
            prefix=prefix.substring(0,prefix.length-1);
            if(prefix ==="")
                return "";
        }
    }
    return prefix;
}
const str1=["flower","fly","flight"];
console.log((commonPrefix(str1)));
