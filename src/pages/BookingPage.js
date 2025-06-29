import { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { submitBooking } from '../api/mockBookingAPI';  // import mock function

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00"];
const updateTimes = (state, action) => initializeTimes();

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const submitForm = async (formData) => {
    const success = await submitBooking(formData);  // use mockBookingAPI here
    if (success) {
      setBookings(prev => [...prev, formData]);
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
