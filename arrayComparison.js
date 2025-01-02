// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: clarity, originality, and difficulty.
// The rating for Alice’s challenge is the triplet A = (a[0], a[1], a[2]), and the rating for Bob’s challenge is the triplet B = (b[0], b[1], b[2]).
// The task is to compare each category and determine the winner:
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] == b[i], no points are awarded.
// The comparison is done for all three categories.
// Input Format:
// The first line contains 3 space-separated integers representing Alice's ratings: a[0], a[1], a[2].
// The second line contains 3 space-separated integers representing Bob's ratings: b[0], b[1], b[2].
// Output Format:
// Print two space-separated integers denoting the respective points earned by Alice and Bob.
// Constraints:
// 1≤a[i],b[i]≤100
// Example Input:
// 5 6 7
// 3 6 10
// Example Output:
// 1 1
// Explanation:
// In the first category, a[0]=5 is greater than b[0]=3, so Alice earns 1 point.
// In the second category, a[1]=6 is equal to b[1]=6, so no points are awarded.
// In the third category, a[2]=7 is less than b[2]=10, so Bob earns 1 point.
// Thus, the result is 1 for Alice and 1 for Bob.
function compareTriplets(a, b) {
    var alicePoints = 0;
    var bobPoints = 0;
    for (var i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        }
        else if (a[i] < b[i]) {
            bobPoints++;
        }
    }
    return "".concat(alicePoints, " ").concat(bobPoints);
}
var aliceRatings = [1, 6, 7];
var bobRatings = [3, 6, 10];
console.log(compareTriplets(aliceRatings, bobRatings));
