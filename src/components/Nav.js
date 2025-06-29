import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/navbarlogo.png'; // Make sure this path is correct!
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-left">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Little Lemon Logo" className="logo" />
        </NavLink>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul
        id="primary-navigation"
        className={`nav-links ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <li><NavLink to="/"home>Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/booking">Reserve</NavLink></li>
        <li><NavLink to="/order-online">Order Online</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
