// // Write a function that checks if two strings are anagrams of each other.
// //Sample input:Listen, Silent
// let user=reqire('prompt-sync')()
// function areAnagrams(a:string,b:string):boolean {
//     a=a.replace(/\s/g, '').toLowerCase();
//     b=b.replace(/\s/g, '').toLowerCase();
//     if(a.length!==b.length) {
//         return false;
//     }
//     const charArray1=a.split('').sort();
//     const charArray2=b.split('').sort();
//     return charArray1.join('')===charArray2.join('');
// }
// const a="Listen";
// const b="Silene";
// if(areAnagrams(a,b)) 
//     {
//     console.log("They are Anagrams");
//   }
//  else{
//     console.log("No , They are not an Anagrams");
//  }
var user = require('prompt-sync')();
var a = user("Enter firststring ");
var b = user("Enter secondstring");
function anagram(a, b) {
    var c = a.toLowerCase().split('');
    var d = b.toLowerCase().split('');
    var firstjoinedArray = c.sort().join('');
    var secondjoinedArray = d.sort().join('');
    if (firstjoinedArray == secondjoinedArray) {
        console.log("Anagram");
    }
    else {
        console.log("Not a Anagram");
    }
}
anagram(a, b);
