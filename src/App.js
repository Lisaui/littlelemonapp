import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';  // ConfirmedBooking imported
import About from './pages/About';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
