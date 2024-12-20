function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // No Error
let result2 = add(5, parseInt('10', 10)); // Correct Type Conversion
//let result3 = add(5, '10'); // Throws an error