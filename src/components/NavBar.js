import React, { useState } from 'react';

const NavBar = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav1 ${menuOpen ? 'show-menu' : ''}`}>
        <li className="nav_li" onClick={() => { scrollToHome(); closeMenu(); }}>
          Home
        </li>
        <li className="nav_li" onClick={() => { scrollToAbout(); closeMenu(); }}>
          About
        </li>
        <li className="nav_li" onClick={() => { scrollToProjects(); closeMenu(); }}>
          Projects
        </li>
        <li className="nav_li" onClick={() => { scrollToContact(); }}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
