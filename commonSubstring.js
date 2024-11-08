// Implement a function that finds the longest common substring between two strings.
var s1 = "javascript";
var s2 = "typescript";
var ans = "";
for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
        if (s1[i] == s2[j]) {
            var tem = ""; // Reset 'tem' here for each match
            var x = i;
            var y = j;
            // Check bounds in the while loop and compare characters
            while (x < s1.length && y < s2.length && s1[x] == s2[y]) {
                tem += s1[x];
                x++;
                y++;
            }
            // Update 'ans' if the current substring is the longest found
            if (tem.length > ans.length) {
                ans = tem;
            }
        }
    }
}
console.log(ans);
