"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countOccurance(ar, n) {
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] === n) {
            count++;
        }
    }
    return count;
}
var example = [1, 2, 1, 2, 3, 4, 1];
var n = 3;
console.log(countOccurance(example, n));
