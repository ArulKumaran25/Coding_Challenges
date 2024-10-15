function lesserNumber(ar, n) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] < n) {
            sum += ar[i];
        }
    }
    return sum;
}
var example = [1, 2, 3, 4, 5];
var n = 3;
console.log(lesserNumber(example, n));
