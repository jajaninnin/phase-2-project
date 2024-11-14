import React, {useState} from "react";
import { Link, useOutletContext } from "react-router-dom";

function CupcakeCard({ id, name, img, price, amount, cartId }) {
  const {checkIfInCart, addOrRemoveFromCart, cart, setCart} = useOutletContext(); // coming from App
  const [newAmount, setNewAmount] = useState(amount);

  // If the cupcake is in the cart, you need to remove it when clicking the button,
  // otherwise, you need to add it. This is used to determine if the add or remove happens.
  const isInCart = checkIfInCart(id);

  const updateCartAmount = (event) => {
    const newAmt = event.target.value;
    const newAmountAsNumber = parseInt(newAmt || 1, 10);
    
    fetch(`http://localhost:3000/cart/${cartId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({amount: newAmountAsNumber})
    })
    .then((response) => response.json())
    .then((data) => {
      setNewAmount(newAmountAsNumber);
      const oldCart = cart.filter(cartItem => cartItem.id !== cartId);
      setCart([...oldCart, data]);
    })
    .catch((error) => console.error("Error updating cart amount:", error));
  };

  return (
    <ul className="card" data-testid="cupcake-item">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      <button className="submit-button" onClick={() => addOrRemoveFromCart(id)}>
        {isInCart ? 'Remove From Cart' : 'Add To Cart'}
      </button>
      <Link to={`/cupcakelist/${id}`}><button>Details</button></Link>
      { amount && cartId &&
      <div className="card-amount-container">
          Amount: <input className="card-amount" onChange={updateCartAmount} value={newAmount} type="number" name="amount" min="1" step="1" />
        </div>
      }
      </ul>
  );
}

export default CupcakeCard;