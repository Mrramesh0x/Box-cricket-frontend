"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">BOXCRICKET</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
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
