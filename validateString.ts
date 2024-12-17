function isNumeric(value: string): boolean {
    
    return !isNaN(Number(value)) && isFinite(Number(value));
}

// Test cases
const inputs: string[] = ["2e10", "3.14", "abc"];
const outputs: boolean[] = inputs.map(input => isNumeric(input));

// Print results
inputs.forEach((input, index) => {
    console.log(`Input: "${input}" -> Output: ${outputs[index]}`);
});
