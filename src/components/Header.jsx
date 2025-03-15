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
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
