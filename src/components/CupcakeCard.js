import React, { useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

function CupcakeCard({ cupcake, cupcakeImgs, prices, deleteCupcake, isIndividualPage }) {
  const [inStock, setInStock] = useState(true);
  const {cupcakes} = useOutletContext();
  const {id} = useParams();
  const cupcakeToFind = cupcakes.find((cupcake) => {
    console,log(id)
    return cupcake.id === id})
  const cupcakeToRender = isIndividualPage ? cupcakeToFind : cupcake;
  console.log(cupcakeToFind, "cupcakeToFind")
console.log(cupcakeToRender, "cupcakeToRender")

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    deleteCupcake(cupcakeToRender.id); 
  }; 
  
  // if (cupcakes.length < 1){
  //   return "Loading"
  // }

  return (
    <li className="card" data-testid="cupcake-item">
      <img src={cupcakeToRender.image} alt={cupcakeToRender.name} />
      <h4>{cupcakeToRender.name}</h4>
      <p>Price: {prices}</p>
      <button className={inStock ? "primary" : "submit-button"} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button className="submit-button" onClick={handleDelete}>Delete</button>
      {/* <button className="details-button" onClick={handleDetails}>Details</button> */}
      {isIndividualPage ? <button>Details</button> : 
      <Link to={`/cupcakelist/${cupcakeToRender.id}`}>Details</Link>
      }
        </li>
  );
}

export default CupcakeCard;