import React from 'react';
import "./style.scss";

const Header = () => {
  return (
    <header className="sticky">
      <div className="header">
        <a href="#home" className="skip-link">
          Skip to main content
        </a>
        <a href="#home" className="header__logo">
          <img src="/images/logo.svg" alt="Donia Amer logo" className="header__logo-img" />
        </a>

        <nav className="navigation bracket-hover">
          <a href="#home" data-hover="Home">Home</a>
          <a href="#about" data-hover="About">About</a>
          <a href="#projects" data-hover="Projects">Projects</a>
          <a href="#contact" data-hover="Contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}


export default Header; 