import React from 'react';
import "./style.scss";

const Pills = (props) => {
  return (
    <div className="pills">
      {
        props.pillsArray.map((pill) =>
        <span className="pill">
          {pill}
        </span>
      )}   
    </div>
  )
}


export default Pills; 