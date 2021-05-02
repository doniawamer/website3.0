import React from 'react';
import "./style.scss";
import Pills from "../pills/pills.jsx";


const Project = (props) => {
  const {Title, Link, Image, Text, Tech} = props.cardInfo; 
  const cardContainer = props.visible? "card carousel_item  carousel_item--visible" : "card carousel_item";
  return (
    <div className={cardContainer}> 
    <div className="card-body">
      <img src={Image} className="card-img" alt="project snapshot"/>
      <p className="card-desc">{Text}</p>
      <Pills pillsArray={Tech} />
    </div>
      <h2 className="card-title">
        <a href={Link} className="card-link">{Title}</a>
      </h2>
    </div>
  )
}


export default Project; 
