// src/components/Main.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00"];
};

const updateTimes = (state, action) => {
  const date = action.date;

  // For now, just return the same times — can customize later
  return initializeTimes();
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(), initializeTimes);

  return (
    <main>
      <h2>Welcome to Little Lemon!</h2>
      <p>Enjoy fresh mediterranean flavors created daily by chef Mike and the team.</p>

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
