// Staircase
// Problem Statement:
// Write a program that prints a staircase of size n.
// A staircase is a right-aligned arrangement of # symbols with spaces to the left, such that the bottom row contains n # symbols, and each row above contains one fewer # until the top row, which contains a single #.
// Each row is right-aligned.
// Function Description:
// Complete the function staircase in the editor below.
// staircase has the following parameter:
// int n: an integer representing the size of the staircase.
// The function prints the staircase as described above.
// Input Format:
// A single integer, n, denoting the size of the staircase.
// Constraints:
// 0<n≤100
// Output Format:
// Print the staircase of size n, with each step on a new line.
// Example Input:
// 6

function staircase(n:number):void {
    for(let i=1;i<=n;i++) {
        const spaces=" ".repeat(n-i);
        const hashes="#".repeat(i);
        console.log(spaces+hashes);
       }
}
const size=7;
staircase(size);