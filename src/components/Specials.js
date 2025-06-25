import React from 'react';
import './Specials.css'; // Make sure to create this CSS file or add to your main CSS
import greekSaladImg from '../images/greek-salad.png';
import bruschettaImg from '../images/bruchetta.svg';
import lemonDessertImg from '../images/lemon-dessert.png';


function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
      image: greekSaladImg
    },
    {
      id: 2,
      name: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$9.99',
      image: bruschettaImg
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '$5.00',
      image: lemonDessertImg
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week’s Specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map(item => (
          <div className="special-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="special-card-content">
              <div className="card-title-row">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="order-button">Order a delivery 🚚</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
