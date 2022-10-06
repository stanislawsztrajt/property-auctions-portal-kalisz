import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

test('should render Header', () => {
  const { getByText } = render(<Header />);

  expect(getByText('')).toBeInTheDocument();
});
  