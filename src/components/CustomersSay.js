// src/components/CustomersSay.js

import React from 'react';

function CustomersSay() {
  const reviews = [
    { id: 1, name: 'Anna', review: 'Amazing food and service!', stars: 5 },
    { id: 2, name: 'Ben', review: 'Loved the lemon dessert!', stars: 4 },
    { id: 3, name: 'Clara', review: 'The ambiance was perfect.', stars: 5 }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="review-grid">
        {reviews.map(({ id, name, review, stars }) => (
          <div className="review-card" key={id}>
            <h3>{name}</h3>
            <p>{review}</p>
            <p>{'⭐'.repeat(stars)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
