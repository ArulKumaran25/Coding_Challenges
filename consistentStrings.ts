// 1684. Count the Number of Consistent Strings
// Easy
// Topics
// Companies
// Hint
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
 
// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.



function countConsistentStrings(allowed:string,words:string[]):number{
    const allowedSet=new Set(allowed);
    let count=0;

    for(let word of words){
        let isConsistent=true;
        for(let char of word){
            if(!allowedSet.has(char)){
                isConsistent=false;
                break; 
            }
        }
        if(isConsistent){
            count++;
        }
    }
     return count;
}
const allowed1="ab";
const words1=["ad","bd","aaab","baa","badab"];
console.log(countConsistentStrings(allowed1, words1)); // Output: 2
const allowed2="abc";
const words2=["a","b","c","ab","ac","bc","abc"];
console.log(countConsistentStrings(allowed2, words2)); // Output: 7
const allowed3="cad";
const words3=["cc","acd","b","ba","bac","bad","ac","d"];
console.log(countConsistentStrings(allowed3, words3)); // Output: 4
