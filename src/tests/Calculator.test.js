import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('Calculator component renders correctly', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});

test('Calculator component displays initial value of 0', () => {
  const { getByText } = render(<Calculator />);
  const displayElement = getByText('0');
  expect(displayElement).toBeInTheDocument();
});

test('Calculator component updates display with clicked button values', () => {
  const { getByText } = render(<Calculator />);
  const buttonElement = getByText('1');
  fireEvent.click(buttonElement);
  const displayElement = getByText('1');
  expect(displayElement).toBeInTheDocument();
});

test('Calculator component performs addition correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const displayElement = getByText('3');
  expect(displayElement).toBeInTheDocument();
});
