import React ,{ useState, useEffect } from 'react';
import "./style.scss";
import copy from "../../assets/fonts/copy/copy.js";
import Project from "./project/project.jsx";


const Projects = () => {
  const { Title, Cards } = copy.Projects;
  const [slide, setSlide] = useState(0);
  const count = Cards?.length -2;
   
  useEffect(() => {
    console.log('slide', slide);
  }, [slide]);

  const next = () => {
    if (slide < count){
      setSlide(slide + 1);
      console.log('nexterino ', slide);
    }
  }

  const back = () => {
    if (slide > 0){
      setSlide(slide - 1);
      console.log('backerino ', slide);
    }
  }

  return (
    <section className="projects" id="projects">
        <p className="projects-title">{Title}</p>
        <div className="carousel-container">
        <button className="carousel-control" onClick={back} aria-label="back" disabled={slide === 0}>←</button>  
        {
          Cards.map( (card, i) =>
            <Project cardInfo={card} key={i} visible={i===slide || i === slide + 1}/>
          )
        }

        <button className="carousel-control" onClick={next} aria-label="next" disabled={slide === count}>→</button>  
        </div>    
    </section>
  )
}

export default Projects; 
