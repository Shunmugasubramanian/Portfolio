import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="brand-icon">S</a>
        <h1 className="logo">Shunmuga Subramanian</h1>
        <button className="hamburger" 
          onClick={()=> setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href='#skills' onClick={() => setMenuOpen(false)}>Skills</a>
          <a href='#certifications' onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;