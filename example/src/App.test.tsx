import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// TODO Add additional app testing
test('renders the app without error', () => {
  const { getByText } = render(<App />)
  expect(getByText('Examples')).toBeInTheDocument()
})
