import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

function CupcakeCard({ id, name, img, price }) {
  const {deleteCupcake} = useOutletContext(); // coming from App
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    deleteCupcake(id); 
  }; 

  return (
    <li className="card" data-testid="cupcake-item">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={inStock ? "primary" : "submit-button"} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button className="submit-button" onClick={handleDelete}>Delete</button>
      <Link className="submit-button" to={`/cupcakelist/${id}`}>Details</Link>
    </li>
  );
}

export default CupcakeCard;