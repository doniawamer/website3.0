import React from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js"

const About = () => {
  const { Title, Body } = copy.About;
  return (
    <div className="about" id="about">
      <div className="about__img-wrapper">
        <img src="/images/about.png" className="about__img" alt="about me" />
      </div>
      <div className="about__body">
        <p className="about__body-title">{Title}</p>
        {Body.map(paragraph => <p className="about__body-paragraph">{paragraph}</p>)}          
      </div>
    </div>
  )
}


export default About; 