// Implement a function that finds the longest common substring between two strings.

var s1: string = "javascript";
var s2: string = "typescript";
var ans: string = "";

for (var i: number = 0; i < s1.length; i++) {
    for (var j: number = 0; j < s2.length; j++) {
        if (s1[i] == s2[j]) {
            var tem: string = "";  
            var x = i;
            var y = j;

            while (x < s1.length && y < s2.length && s1[x] == s2[y])
            {
                tem += s1[x];
                x++;
                y++;
            }

            if (tem.length > ans.length) 
            {
                ans = tem;
            }
        }
    }
}

console.log(ans);
