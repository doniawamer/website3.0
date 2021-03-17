import React from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js"


const Contact = () => {
  const { Title, Subtitle } = copy.Contact;
  return (
    <section className="contact" id="contact">
      <div className="contact__body">
        <h1 className="home__hero-title">{Title}</h1>
        <p className="home__hero-subtitle">{Subtitle[0]} <a href="/pdfs/resume.pdf" className="contact__body-resume" download>{Subtitle[1]}</a>{Subtitle[2]}</p>
      </div>
      <div className="contact__img-wrapper">
      <img src="/images/contact.png" className="contact__img" alt="about me" />
      </div>
    </section>
  )
}

export default Contact; 