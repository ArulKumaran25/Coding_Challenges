function isNumeric(value) {
    return !isNaN(Number(value)) && isFinite(Number(value));
}
// Test cases
var inputs = ["2e10", "3.14", "abc"];
var outputs = inputs.map(function (input) { return isNumeric(input); });
// Print results
inputs.forEach(function (input, index) {
    console.log("Input: \"".concat(input, "\" -> Output: ").concat(outputs[index]));
});
