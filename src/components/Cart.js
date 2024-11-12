import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import CupcakeCard from "./CupcakeCard";

function Cart() {
    const navigate = useNavigate();
    const { cupcakes, cart } = useOutletContext(); // coming from App

    // map transforms each item of the array. What you want to transform is in the return.
    // Use a map to just get an array of just the cupcake id's currently in the cart.
    // This lets us later just check if an id in the cupcakes array is in the cart.
    const cartIds = cart.map((cartItem) => cartItem.cupcakeId); // Gets all the values of the key name of "cupcakeId" in db.json, that are in the cart

    // Filter the cupcakes array to only those that are in the cart, by checking
    // if they are included in that cart array that is just an array of ids.
    const cupcakesInCart = cupcakes.filter(cupcake => cartIds.includes(cupcake.id));

    // Calculate the total price of all the cupcakes in the cart.
    const totalPrice = cupcakesInCart.reduce((total, cupcake) => {
        return total + cupcake.price;
    }, 0);

    return (
        <main>
            {cupcakesInCart.map((cupcake) => (
                <CupcakeCard
                    key={cupcake.id}
                    id={cupcake.id}
                    name={cupcake.name}
                    img={cupcake.image}
                    price={cupcake.price}
                />
            ))}

            
            <div className="total-price">
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>

            <div className="cart-footer">
                <button className="submit-button" onClick={() => navigate('/cupcakelist')}>Continue Shopping</button>
            </div>
        </main>
    );
}

export default Cart;
