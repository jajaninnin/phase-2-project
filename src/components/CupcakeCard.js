import React, { useState } from "react";

function CupcakeCard({ cupcake, cupcakeImgs, prices, deleteCupcake }) {
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    deleteCupcake(cupcake.id); 
  }; 

  return (
    <li className="card" data-testid="cupcake-item">
      <img src={cupcakeImgs} alt={cupcake.name} />
      <h4>{cupcake.name}</h4>
      <p>Price: {prices}</p>
      <button className={inStock ? "primary" : "submit-button"} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button className="submit-button" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default CupcakeCard;