import React, { useState } from "react";

function PlantCard({ plant, plantImgs, prices, deletePlant }) {
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    deletePlant(plant.id); 
  }; 

  return (
    <li className="card" data-testid="plant-item">
      <img src={plantImgs} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {prices}</p>
      <button className={inStock ? "primary" : ""} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;