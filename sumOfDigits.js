function sumOfDigits(num) {
    return num.toString().split('').reduce(function (sum, digit) { return sum + parseInt(digit); }, 0);
}
console.log(sumOfDigits(1234));
console.log(sumOfDigits(5678));
