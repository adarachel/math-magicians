import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the welcome message correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to our page')).toBeInTheDocument();
  });
});
