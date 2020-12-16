import React from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js"

const Contact = () => {
  const { Title, Subtitle } = copy.Contact;
  return (
    <div className="contact" id="contact">
      <div className="contact__body">
        <h1 className="home__hero-title">{Title}</h1>
        <p className="home__hero-subtitle">{Subtitle}</p>

      </div>
      <div className="contact__img-wrapper">
        <img src="/images/contact.png" className="contact__img" alt="contact me" />
      </div>
    </div>
  )
}

export default Contact; 