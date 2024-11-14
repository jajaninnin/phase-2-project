import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import StarRate from "./StarRate";

function CupcakeCard({ id, name, img, price }) {
  const { checkIfInCart, addOrRemoveFromCart } = useOutletContext(); // coming from App
  const isInCart = checkIfInCart(id);

  // State to store the rating locally for each cupcake
  const [rating, setRating] = useState(0);  // Default rating is 0

  // Load the rating from localStorage when the component mounts
  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${id}`);
    if (storedRating) {
      setRating(Number(storedRating));  // Convert the stored value to a number
    }
  }, [id]);

  // Update the rating and save it to localStorage when a user clicks a star
  const handleSetRating = (currentRate) => {
    setRating(currentRate);
    localStorage.setItem(`rating-${id}`, currentRate);  // Save rating to localStorage
  };

  return (
    <ul className="card" data-testid="cupcake-item">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <div className="star-rating">
        {/* Pass rating and handleSetRating down to StarRate component */}
        <StarRate rating={rating} setRating={handleSetRating} />
      </div>      
      <p>Price: {price}</p>
      <button className="submit-button" onClick={() => addOrRemoveFromCart(id)}>
        {isInCart ? 'Remove From Cart' : 'Add To Cart'}
      </button>
      <Link to={`/cupcakelist/${id}`}><button>Details</button></Link>
    </ul>
  );
}

export default CupcakeCard;