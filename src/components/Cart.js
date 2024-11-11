import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import CupcakeCard from "./CupcakeCard";

function Cart() {
    const navigate = useNavigate();
    const {cupcakes, cart} = useOutletContext(); // coming from App

    // map transforms each item of the array. What you want to transform is in the return.
    // Use a map to just get an array of just the cupcake id's currently in the cart.
    // This lets us later just check if an id in the cupcakes array is in the cart.
    // cupcakeId is a key in db.json. The below map's goal is to get the value of that cupcakeId.
    // Before: [{id: "abc", cupcakeId: "1"}, {id:"fa1", cupcakeId: "2"}]
    // After: ["1", "2"]
    const cartIds = cart.map((cartItem) => cartItem.cupcakeId); // Gets all the values of the key name of "cupcakeId" in db.json, that are in the cart

    // Filter the cupcakes array to only those that are in the cart, by checking
    // if they are included in that cart array that is just an array of ids.
    const cupcakesInCart = cupcakes.filter(cupcake => cartIds.includes(cupcake.id));

    // Maps over the the cart and returns the cupcake it finds in the cupcakes array.
    // const theSameCupcakesInCart = cart.map((cartItem) => cupcakes.find((cupcake) => cartItem.cupcakeId === cupcake.id));

    // Filters for the cupcakes that are in the cart, by checking if each cupcake can be found in the cart.
    // const stillTheSameCupcakesInCart = cupcakes.filter(cupcake => cart.find(cartItem => cartItem.cupcakeId === cupcake.id));

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
            <div className="cart-footer">
                <button className="submit-button" onClick={() => navigate('/cupcakelist')}>Continue Shopping</button>
            </div>
        </main>
    );
}

export default Cart;