// Declare two variables x and y with numerical values. Swap their values without using a third variable

import * as readline from 'readline'; // Import readline for user input

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Read user input
r.question('Enter two numbers (a and b) separated by space to swap: ', (values: string) => {
  let a: number = Number(values.split(' ')[0]);
  let b: number = Number(values.split(' ')[1]);

  // Swap logic without a third variable
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`Swapped values: a = ${a}, b = ${b}`);

  // Close the readline interface
  r.close();
});

// Function to swap numbers
function swapNumbers(a: number, b: number): void {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`Swapped values using function: a = ${a}, b = ${b}`);
}

// Example function call
swapNumbers(5, 3); 
