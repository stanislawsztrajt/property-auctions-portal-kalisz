import React from 'react';
import { render } from '@testing-library/react';
import MapSearchSort from './map-search-sort';

test('should render MapSearchSort', () => {
  const { getByText } = render(<MapSearchSort />);

  expect(getByText('')).toBeInTheDocument();
});
  