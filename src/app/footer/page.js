"use client";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>BoxCricket</h3>
          <p>Play. Book. Enjoy.</p>
        </div>

        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="price">Pricing</a></li>
          <li><a href="booking">Book Now</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BoxCricket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
