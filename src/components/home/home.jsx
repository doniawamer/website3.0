import React from 'react'; 
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js"

const Home = () => {
    const { PreTitle, Title, Subtitle, Blurb } = copy.Home;
    return (
    <div className="home">
        <div className="home__hero">
          <p className="home__hero-pretitle">{PreTitle}</p>
          <h1 className="home__hero-title">{Title}</h1>
          <p className="home__hero-subtitle">{Subtitle}</p>
          <p className="home__hero-blurb">{Blurb}</p>
        </div>
        <img src="/images/hero.png" className="home__img"/>
    </div>
    )
  }


export default Home; 