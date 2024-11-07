import React, { useState } from "react";

function CupCakeCard({ cupCake, cupCakeImgs, prices, deleteCupCake }) {
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    deletePlant(plant.id); 
  }; 

  return (
    <li className="card" data-testid="cupCake-item">
      <img src={cupCakeImgs} alt={cupCake.name} />
      <h4>{cupCake.name}</h4>
      <p>Price: {prices}</p>
      <button className={inStock ? "primary" : ""} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default CupCakeCard;