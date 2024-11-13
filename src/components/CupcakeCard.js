import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function CupcakeCard({ id, name, img, price }) {
  const {checkIfInCart, addOrRemoveFromCart} = useOutletContext(); // coming from App

  // If the cupcake is in the cart, you need to remove it when clicking the button,
  // otherwise, you need to add it. This is used to determine if the add or remove happens.
  const isInCart = checkIfInCart(id);

  return (
    <ul className="card" data-testid="cupcake-item">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className="submit-button" onClick={() => addOrRemoveFromCart(id)}>
        {isInCart ? 'Remove From Cart' : 'Add To Cart'}
      </button>
      <Link to={`/cupcakelist/${id}`}><button>Details</button></Link>
      </ul>
  );
}

export default CupcakeCard;