import React from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js";
import Project from "./project/project.jsx";


const Projects = () => {
  const { Title, Cards } = copy.Projects;
  return (
    <section className="projects" id="projects">
        <p className="projects-title">{Title}</p>
        <div className="carousel-container">
        <div className="projects-cards carousel">
           <Project cardInfo={Cards[0]} visible={true}/>
           <Project cardInfo={Cards[1]} visible={false}/>
           <Project cardInfo={Cards[2]}  />
        </div>       
        <div className="carousel-control">
        <button id="button-prev" className="projects-cards-controls" alt="previous">←</button>
        <button id="button-next" className="projects-cards-controls" alt="next">→</button>
        </div>
        </div>
    </section>
  )
}


export default Projects; 