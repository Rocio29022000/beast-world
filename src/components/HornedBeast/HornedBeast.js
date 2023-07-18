import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  const [fav, setFav] = useState(0);

  function handleFav(){
    setFav(fav + 1);
  }
  
  return (
    <div className="hb-container">
      <h2>{title}</h2>
      <img src={imgUrl} alt={title} />
      <p>{description}</p>
      <p>
        <span className = "like" onClick ={handleFav}>
        ❤️
        </span> 
        {fav}
      </p>
    </div>
  );
}