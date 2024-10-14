function fibonacci(n) {
    var fibseq = [0, 1];
    for (var i = 2; i < n; i++) {
        fibseq.push(fibseq[i - 1] + fibseq[i - 2]);
    }
    return fibseq;
}
console.log(fibonacci(10));
