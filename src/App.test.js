import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing and displays Hello World', () => {
  const {getByText} = render(<App />);
  getByText(/hello world/i);
});
