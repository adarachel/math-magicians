import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/ButtonComponents/Button';

test('Button component renders correctly', () => {
  const { asFragment } = render(<Button name="test" handleClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Button component calls handleClick function when clicked', () => {
  const handleClickMock = jest.fn();
  const { getByText } = render(<Button name="test" handleClick={handleClickMock} />);
  const buttonElement = getByText('test');
  fireEvent.click(buttonElement);
  expect(handleClickMock).toHaveBeenCalled();
});
