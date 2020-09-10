import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App links to the Github page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Github repository/i);
  expect(linkElement).toBeInTheDocument();
});

// create tests for prevent default. Clicking link should open new page