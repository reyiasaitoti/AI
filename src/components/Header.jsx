import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">AudioSummarizer</Link>

        {/* Navigation Menu */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <Link to="/register" className="cta-btn">Get Started</Link>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
