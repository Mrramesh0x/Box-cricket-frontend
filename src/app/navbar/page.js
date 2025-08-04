import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">BOXCRICKET</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="howitworks" className="navbar-link">How It Works</a></li>
        <li className="navbar-item"><a href="price" className="navbar-link">Pricing</a></li>
        <li className="navbar-item"><a href="booking" className="navbar-link">Book Now</a></li>
        <li className="navbar-item"><a href="faq" className="navbar-link">FAQ</a></li>
        <li className="navbar-item"><a href="contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
