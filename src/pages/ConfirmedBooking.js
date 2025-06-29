import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your reservation. We look forward to serving you at Little Lemon.</p>
      <button 
        onClick={() => navigate('/booking')} 
        style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
      >
        Make Another Reservation
      </button>
    </main>
  );
}

export default ConfirmedBooking;
