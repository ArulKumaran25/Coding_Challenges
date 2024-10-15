"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countOfNumber(start, end, n) {
    var count = 0;
    for (var i = start; i < end; i++) {
        if (i % n == 0) { // check if then is divisible by n 
            count++;
        }
    }
    return count++;
}
var start = 5;
var end = 12;
var n = 5;
console.log(countOfNumber(start, end, n));
