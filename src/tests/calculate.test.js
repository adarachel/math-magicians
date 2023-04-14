import calculate from '../logic/calculate';

test('calculate function adds two numbers', () => {
  const result = calculate({ total: '2', next: '3', operation: '+' }, '=');
  expect(result.total).toBe('5');
});

// Write more tests for the calculate function based on your logic
