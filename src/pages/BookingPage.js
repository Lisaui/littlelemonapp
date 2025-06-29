import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00"];

const updateTimes = (state, action) => {
  // You can later replace with fetchAPI(action.date) for dynamic times
  return initializeTimes();
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // Initialize bookings from localStorage or empty array
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const navigate = useNavigate();

  // Save bookings to localStorage whenever bookings state changes
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  // submitForm calls the API and updates local bookings on success
  const submitForm = async (formData) => {
    const success = await window.submitAPI(formData);
    if (success) {
      setBookings(prevBookings => [...prevBookings, formData]);
      navigate('/booking-confirmed');
    } else {
      alert('Booking submission failed. Please try again.');
    }
  };

  return (
    <main>
      <h2>Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      {/* Optional: Show current bookings for testing */}
      <section style={{ marginTop: '2rem' }}>
        <h3>Existing Bookings</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((booking, index) => (
              <li key={index}>
                Date: {booking.date}, Time: {booking.time}, Guests: {booking.guests}, Occasion: {booking.occasion}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default BookingPage;
