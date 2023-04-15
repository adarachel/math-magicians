import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('Home component renders correctly', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

test('Home component displays welcome text', () => {
  const { getByText } = render(<Home />);
  const welcomeElement = getByText(/Welcome to our page/i);
  expect(welcomeElement).toBeInTheDocument();
});
