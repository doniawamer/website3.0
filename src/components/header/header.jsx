import React from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js"

const Header = () => {
  const { Skip, Nav } = copy.Header;
  return (
    <header className="sticky">
      <div className="header">
        <a href="#home" className="skip-link">
          {Skip}
        </a>
        <a href="#home" className="header__logo">
          <img src="/images/logo.svg" alt="Donia Amer logo" className="header__logo-img" />
        </a>
        <nav className="navigation bracket-hover">
          <a href="#home" data-hover="Home">{Nav[0]}</a>
          <a href="#about" data-hover="About">{Nav[1]}</a>
          <a href="#projects" data-hover="Projects">{Nav[2]}</a>
          <a href="#contact" data-hover="Contact">{Nav[3]}</a>
        </nav>
      </div>
    </header>
  )
}


export default Header; 