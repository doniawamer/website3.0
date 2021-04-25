import React from 'react';
import "./style.scss";
import Pills from "../pills/pills.jsx";


const Project = (props) => {
  const {Title, Link, Image, Text, Tech} = props.cardInfo; 
  return (
    <div className="card"> 
    <div className="card-body">
      <img src={Image} className="card-img"/>
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


    {/* <div>
      <img src={Image} className="card-img"/>
      <h2 className="card-title"><a href={Link} >{Title}</a></h2>
    </div>
    <div className="card">
      <p className="card-desc">{Text}</p>
      <div className="pill-container">
      <Pills pillsArray={Tech} />
      </div>
    </div> */}