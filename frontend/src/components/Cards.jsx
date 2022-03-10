import React from "react";
import "./styles/Card.css"
const Cards = ({ title, source }) => {
  return (
    <div className="card">
      <div>
          <img src={source} alt="imagess" height={200} width={200}/>
      <div>
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste, impedit consectetur repellendus numquam quibusdam nihil pariatur voluptatem tempore doloribus.</p>
      </div>

      </div>
    </div>
  );
};

export default Cards;
