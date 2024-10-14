function fibonacci(n:number):number[]{
    let fibseq:number[]=[0,1];
    for(let i=2;i<n;i++){
        fibseq.push(fibseq[i-1]+fibseq[i-2]);
    }
    return fibseq;
}

console.log(fibonacci(10));
