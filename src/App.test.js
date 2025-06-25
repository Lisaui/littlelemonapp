
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  // import MemoryRouter
import App from './App';

test("Adds one", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const heading = screen.getByTestId("currentNumber");
  const btn = screen.getByTestId("add-one");

  fireEvent.click(btn);

  expect(heading).toHaveTextContent("2");
});