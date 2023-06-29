/**
 * Let's make a calculator 🧮
 */

/* 
  // 나의 답안
  type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

  const calculate = (operator: Operator, ...numbers: number[]): number => {
    const operations: Record<Operator, (a: number, b: number) => number> = {
      add: (a, b) => a + b,
      substract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
      remainder: (a, b) => a % b,
    }
    
    if (operator in operations) return numbers.reduce(operations[operator]);
    return NaN;
  }
*/

type Commend = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Commend, a: number, b: number): number {
  switch(command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw new Error('unknown command');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1