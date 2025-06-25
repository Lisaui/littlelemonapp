import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import About from './pages/About';
import BookingPage from './pages/BookingPage';
import OrderOnline from './pages/OrderOnline';

function App() {
  console.log('App rendered'); // ✅

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/order-online" element={<OrderOnline />} />
      </Routes>
    </Router>
  );
}

export default App;
