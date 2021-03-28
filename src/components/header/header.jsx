import React from 'react';
import { useState, useEffect } from "react"
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js"

export const SCROLL_DIRECTION_DOWN = "SCROLL_DIRECTION_DOWN"
export const SCROLL_DIRECTION_UP = "SCROLL_DIRECTION_UP"
export const SCROLL_DIRECTION_NONE = "SCROLL_DIRECTION_NONE"

export const Header = () => {
  const { Skip, Nav } = copy.Header;
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(SCROLL_DIRECTION_NONE);
  const [shadow, setShadow] = useState(false);

  useScrollPosition(position => {
    setPosition(position);
  });

  useScrollDirection(direction => {
    setDirection(direction);
  });

  useEffect(() => {
    if (position === 0 && direction !== SCROLL_DIRECTION_DOWN){
      setShadow(false);
    }else{
      setShadow(true);
    }
  }, [position, direction]);

  return (
    <header className="sticky">
      <div className={`header ${shadow? "header__shadow-in" : "header__shadow-out" }`}>
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

export const useScrollDirection = callback => {
  const [lastYPosition, setLastYPosition] = useState(window.pageYOffset)
  const [timer, setTimer] = useState(null)

  const handleScroll = () => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(function () {
        callback(SCROLL_DIRECTION_NONE)
      }, 150)
    );
    if (window.pageYOffset === lastYPosition) return SCROLL_DIRECTION_NONE;

    const direction = (() => {
      return lastYPosition < window.pageYOffset
        ? SCROLL_DIRECTION_DOWN
        : SCROLL_DIRECTION_UP
    })();

    callback(direction);
    setLastYPosition(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
}

export const useScrollPosition = callback => {
  const handleScroll = () => {
    callback(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
}
