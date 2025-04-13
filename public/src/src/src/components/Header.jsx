import React, { useState } from 'react';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <ul className={`nav-links ${showNav ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="burger" onClick={() => setShowNav(!showNav)}>
          &#9776;
        </button>
      </nav>
    </header>
  );
};

export default Header;
