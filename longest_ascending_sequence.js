// Write a program that reads an array of ints and outputs the length of the
// longest sequence in strictly ascending order. Print the elements of longest
// ascending sequence in an array Elements of the sequence must go one after
// another. A single number is assumed to be an ordered sequence with the length= 1.
// Enter the number of elements 
// 5
// Enter 5 numbers in any order to find the longest ascending sequence
// 45
// 40
// 0
// 39
// 10
// The max value is : 2
// 2numbers in ascending order
// 0 39
function longestAscendingSequence(arr) {
    if (arr.length === 0)
        return { length: 0, sequence: [] };
    var maxLength = 1;
    var currentLength = 1;
    var startId = 0;
    var maxStartId = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLength++;
        }
        else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartId = startId;
            }
            currentLength = 1;
            startId = i;
        }
    }
    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartId = startId;
    }
    var sequence = arr.slice(maxStartId, maxStartId + maxLength);
    return { length: maxLength, sequence: sequence };
}
function ascending() {
    var arr = [45, 40, 0, 39, 10];
    console.log("given input array:".concat(arr.join(' ')));
    var result = longestAscendingSequence(arr);
    console.log("max value is:".concat(result.length));
    console.log("".concat(result.length, "nums in ascending order"));
    console.log(result.sequence.join(' '));
}
ascending();
