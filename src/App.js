import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";


const App = () => {
  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakes(data))
      .catch((error) => console.error("Error fetching cupcake data:", error));
  }, []);

  const deleteCupcake = (id) => {
    fetch(`http://localhost:3000/cupcakes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedCupcake = cupcakes.filter((cupcake) => cupcake.id !== id);
        setCupcakes(updatedCupcake); 
      })
      .catch((error) => console.error("Error deleting cupcake:", error));
  };

  return (
    <div className="app">
      <NavBar />
      <Outlet context={{cupcakes: cupcakes, setCupcakes: setCupcakes, deleteCupcake: deleteCupcake}} /> {/* Allows CupcakePage and CupcakeNewForm to access these */}
    </div>
  );
}

export default App;
