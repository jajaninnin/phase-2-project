import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";


const App = () => {
  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakes(data))
      .catch((error) => console.error("Error fetching cupcake data:", error));
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Outlet context={{cupcakes: cupcakes, setCupcakes: setCupcakes}} /> {/* Allows CupcakePage and CupcakeNewForm to access these */}
    </div>
  );
}

export default App;
