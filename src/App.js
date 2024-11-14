import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";


const App = () => {
  const [cupcakes, setCupcakes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakes(data))
      .catch((error) => console.error("Error fetching cupcake data:", error));

    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => console.error("Error fetching cart data:", error));
  }, []);

  // I put this in app so it can be accessible in CupcakeDetails and CupcakeCard 
  // using outlet context
  const addOrRemoveFromCart = (id) => {
    // if the cupcake is in the cart, find it in the cart and then delete it.
    // If you don't find it in the list, you need to post it to the cart.
    const isThereCartItemToRemove = cart.find((cartItem) => cartItem.cupcakeId === id); 
    // If it's in the cart, delete it
    if (isThereCartItemToRemove) {
      fetch(`http://localhost:3000/cart/${isThereCartItemToRemove.id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "Application/JSON",
          }
      })
      .then(() => {
        // Remove it from the cart now that you have deleted it from db.json, by using filter
        const newCart = cart.filter((cartItem) => id !== cartItem.cupcakeId);
        setCart([...newCart]);
      })
      .catch((error) => console.error("Error removing item from cart:", error));
    } else {
      // If it's not in the cart, add it to the cart by posting it to db.json
      fetch(`http://localhost:3000/cart`, {
          method: 'POST',
          headers: {
            "Content-Type": "Application/JSON",
          },
          // Post a new object where "cupcakeId" is the id of the cupcake you want to add
          // to the cart. It will be the same id as in the cupcake object in db.json.
          body: JSON.stringify({cupcakeId: id, amount: 1}),
      })
      .then((response) => response.json())
      .then((cartResponse) => {
          // Make a new array and add what is now in db.json to the cart.
          setCart([...cart, cartResponse]);
      })
      .catch((error) => console.error("Error adding item to cart:", error));
    }
  };

  // Stored here so CupcakeDetails and CupcakeCard can use it, to keep things DRY.
  // This is used to tell if a cupcake is in the cart, by using find.
  // Will be used in CupcakeDetails and CupcakeCard.
  const checkIfInCart = (id) => {
    return cart.find((cartItem) => cartItem.cupcakeId === id);
  };

  return (
    <div className="app">
      <NavBar />
      <Outlet context={{
        cupcakes: cupcakes, 
        setCupcakes: setCupcakes,
        cart: cart,
        setCart: setCart,
        addOrRemoveFromCart: addOrRemoveFromCart,
        checkIfInCart: checkIfInCart,
      }} /> 
      {/* 
        Allows all pages to access these in context, because all pages are children of App.
        Allows all children, grandchildren, great-grandchildren etc to access this data, 
        instead of just passing props all the way down.
        Makes it easier to get this data, instead of prop-drilling.
      */}
      <Footer />
    </div>
  );
}

export default App;
