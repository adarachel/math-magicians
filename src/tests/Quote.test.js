import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the quote text and author correctly', () => {
    const quoteText = 'Test Quote Text';
    const quoteAuthor = 'Test Quote Author';
    const { getByTestId } = render(<Quote text={quoteText} author={quoteAuthor} />);
    expect(getByTestId('quote-text')).toHaveTextContent(quoteText);
    expect(getByTestId('quote-author')).toHaveTextContent(quoteAuthor);
  });
});
