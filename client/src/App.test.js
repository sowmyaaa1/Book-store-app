import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { test, expect } from '@jest/globals';
import App from './App';

test('renders the app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book Store Server is running!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a button with text "Add Book"', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add Book/i);
  expect(buttonElement).toBeInTheDocument();
});