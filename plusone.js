function plusone(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}
var example = [1, 2, 3];
console.log(plusone(example));
