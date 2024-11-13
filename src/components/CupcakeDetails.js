import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function CupcakeDetails() {
  const {cupcakes, checkIfInCart, addOrRemoveFromCart} = useOutletContext(); // coming from App
  const {id} = useParams(); // must match from route the part of the path after a colon, e.g. :id
  
  // If the cupcake is in the cart, you need to remove it when clicking the button,
  // otherwise, you need to add it. This is used to determine if the add or remove happens.
  const isInCart = checkIfInCart(id);
  const cupcakeSolo = cupcakes.find((cupcake) => {
    // make sure your id's are strings in db.json
    // if its a number, make it a string
    return cupcake.id === id;
  });
  
  // If a user goes directly to /cupcakedetails/:id, the page will break.
  // Because fetch is asynchronous, meaning it takes time to load the cupcakes,
  // we need to wait for fetch to be done before we can render, for example, cupcakeSolo.image,
  // if you try to render cupcakeSolo.image before the fetch is done, 
  // JS breaks because image is not defined yet.
  // If there's no cupcakes yet, we show "Loading" until the fetch is done loading.
  // This lets people go to /cupcakedetails/:id without the site breaking.
  if (cupcakes.length === 0){
    return "Loading";
  }

  return (
    <div className="details-container">
      <div className="details" data-testid="cupcake-details">
          <img className="details-image" src={cupcakeSolo.image} alt={cupcakeSolo.name} />
          <h4 className="details-name" >{cupcakeSolo.name}</h4>
          <p className="details-price" >Price: {cupcakeSolo.price}</p>
          <p className="details-ingredients" >Ingredients: {cupcakeSolo.ingredients}</p>
          <p className="details-allergies" >Allergies: {cupcakeSolo.allergies}</p>
          <button className="submit-button" onClick={() => addOrRemoveFromCart(id)}>
            {isInCart ? 'Remove From Cart' : 'Add To Cart'}
          </button>
      </div>
    </div>
  );
}

export default CupcakeDetails;