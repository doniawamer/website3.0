import React from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js";
import Project from "./project/project.jsx";


const Projects = () => {
  const { Title, Cards } = copy.Projects;
  return (
    <section className="projects" id="projects">
        <p className="projects-title">{Title}</p>
        <p className="projects-cards">
        {
          Cards.map((card) =>
           <Project cardInfo={card} />
          )
        }
        </p>       
    </section>
  )
}


export default Projects; 