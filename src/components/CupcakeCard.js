import React, { useState } from "react";
import { Link } from "react-router-dom";

function CupcakeCard({ cupcake, cupcakeImgs, prices, deleteCupcake }) {
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    deleteCupcake(cupcake.id); 
  }; 
  function handleDetails() {
    console.log("details")
  }

  return (
    <li className="card" data-testid="cupcake-item">
      <img src={cupcakeImgs} alt={cupcake.name} />
      <h4>{cupcake.name}</h4>
      <p>Price: {prices}</p>
      <button className={inStock ? "primary" : "submit-button"} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button className="submit-button" onClick={handleDelete}>Delete</button>
      {/* <button className="details-button" onClick={handleDetails}>Details</button> */}
      <Link to={`/cupcakelist/${cupcake.id}`}>Details</Link>
    </li>
  );
}

export default CupcakeCard;