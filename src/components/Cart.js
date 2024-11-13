import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import CupcakeCard from "./CupcakeCard";

function Cart() {
    const navigate = useNavigate();
    const { cupcakes, cart } = useOutletContext(); 

    const cartIds = cart.map((cartItem) => cartItem.cupcakeId); 
    
    const cupcakesInCart = cupcakes.filter(cupcake => cartIds.includes(cupcake.id));

    const totalPrice = cupcakesInCart.reduce((total, cupcake) => {
        return total + parseFloat(cupcake.price);
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
                <button className="impt-button" onClick={() => navigate('/cupcakelist')}>Continue Shopping</button>
            </div>
        </main>
    );
}

export default Cart;
