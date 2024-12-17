"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countWordFrequency(inputString) {
    var words = inputString.split(" ");
    var wordCount = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (wordCount[word]) {
            wordCount[word] += 1;
        }
        else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
var inputString = "rata ta ta rata ra ta ta";
var result = countWordFrequency(inputString);
console.log(result);
