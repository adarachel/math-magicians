import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('Quote component renders correctly', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});

test('Quote component displays quote text', () => {
  const { getByText } = render(<Quote />);
  const quoteElement = getByText(/Mathematics is not about numbers/i);
  expect(quoteElement).toBeInTheDocument();
});
