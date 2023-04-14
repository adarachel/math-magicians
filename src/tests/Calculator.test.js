import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('Calculator component renders correctly', () => {
  const { getByText } = render(<Calculator />);
  const titleElement = getByText(/Let's do some math!/i);
  expect(titleElement).toBeInTheDocument();
});

test('Calculator component performs addition correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const displayElement = getByText('5');
  expect(displayElement).toBeInTheDocument();
});

// Write more tests for the Calculator component based on your logic
