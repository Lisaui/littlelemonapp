import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('renders the reservation button', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});
