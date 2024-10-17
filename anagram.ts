// // Write a function that checks if two strings are anagrams of each other.
// //Sample input:Listen, Silent

// function anagram(a:string,b:string):boolean{
//     let result=[];
//     for(let i=0;i<=length[i];i++){
//         for(let j=0;j<=length[i];j++){
//             if(a[i]==b[i]){
//                 console.log(true);  
//             }
//             else{
//                 console.log(false);  
//             }
//         }   
//     }
// }

// function anagram (str1:string,str2:string):string{
//     return str1.split(' ').map(word=>word.charAt(0).toLowerCase()+word.slice(1)).join(' ')
//       return str1.split(' ').map(word=>word.charAt(0).toLowerCase()+word.slice(1)).join(' ')
// }
// console.log(anagram(a,b));

function areAnagrams(a:string,b:string):boolean {
    a=a.replace(/\s/g, '').toLowerCase();
    b=b.replace(/\s/g, '').toLowerCase();

    if(a.length!==b.length) {
        return false;
    }
    const charArray1=a.split('').sort();
    const charArray2=b.split('').sort();
    return charArray1.join('')===charArray2.join('');
}
const a="Listen";
const b="Silene";

if(areAnagrams(a,b)) 
    {
    console.log("They are Anagrams");
  }
 else{
    console.log("No , They are not an Anagrams");
 }
   





