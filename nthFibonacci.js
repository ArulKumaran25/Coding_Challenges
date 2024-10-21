function fibonacci(n) {
    var _a;
    if (n <= 1)
        return n;
    var a = 0, b = 1;
    for (var i = 2; i <= n; i++) {
        _a = [b, a + b], a = _a[0], b = _a[1];
    }
    return b;
}
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(8));
