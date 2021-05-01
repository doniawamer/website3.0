import React from 'react';
import "./style.scss";

const Pills = (props) => {
  return (
    <div className="pills">
      {
        props.pillsArray.map((pill, i) =>
        <span className="pill" key={i}>
          {pill}
        </span>
      )}   
    </div>
  )
}


export default Pills; 