// src/components/Header.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../images/Hero.jpg'; // Ensure correct capitalization and path
import './Header.css'; // We'll create this file

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, <br />
          focused on traditional recipes served with a modern twist.
        </p>
        <button onClick={() => navigate('/booking')}>Reserve Table</button>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Delicious food served at Little Lemon" />
      </div>
    </header>
  );
};

export default Header;
