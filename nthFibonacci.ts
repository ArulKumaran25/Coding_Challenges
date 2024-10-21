function fibonacci(n: number): number {
    if (n <= 1) 
    return n;
    
    let a = 0, b = 1;
    
    for(let i=2;i<=n;i++) {
        [a, b] = [b, a + b];
    }
    
    return b;
}

console.log(fibonacci(5)); 
console.log(fibonacci(10)); 
console.log(fibonacci(8));  