import "./navbar.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="header">
      <Link to="/" className="logo">
        <h1>Portfolio.</h1>
      </Link>
      <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/project" onClick={toggleMenu}>Project</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
