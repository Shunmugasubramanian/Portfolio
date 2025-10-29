import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Shunmuga Subramanian.</p>
    </footer>
  );
}

export default Footer;
