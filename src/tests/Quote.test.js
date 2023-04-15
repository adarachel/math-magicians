import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quote';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Quotes />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
