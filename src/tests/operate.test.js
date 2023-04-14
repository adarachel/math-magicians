import operate from '../logic/operate';

test('operate function performs the correct operation', () => {
  const result = operate('2', '3', '+');
  expect(result).toBe('5');
});

// Write more tests for the operate function based on your logic
