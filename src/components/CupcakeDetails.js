import React from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";

function CupcakeDetails() {
  const navigate = useNavigate();
  const {cupcakes, deleteCupcake} = useOutletContext(); // coming from App
  const {id} = useParams();
  const cupcake = cupcakes.find((cupcake) => {
    return cupcake?.id?.toString() === id?.toString();      // making sure both ids are strings in case db.json has a number string
  });

  const handleDelete = () => {
    deleteCupcake(cupcake.id); 
    navigate('/cupcakelist');
  }; 
  
  if (cupcakes.length < 1){
    return "Loading";
  }

  return (
    <li className="details" data-testid="cupcake-details">
      <img className="details-image" src={cupcake.image} alt={cupcake.name} />
      <h4 className="details-name" >{cupcake.name}</h4>
      <p className="details-price" >Price: {cupcake.price}</p>
      <button className="details-delete" onClick={handleDelete}>Delete</button>
      <button>Details</button> 
    </li>
  );
}

export default CupcakeDetails;