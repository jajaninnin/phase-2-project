import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CupcakeList from "./CupcakeList";
import Search from "./Search";

function CupcakePage() {
  const {cupcakes, setCupcakes} = useOutletContext(); // coming from App
  const [searchTerm, setSearchTerm] = useState("");

  const deleteCupcake = (id) => {
    fetch(`http://localhost:3000/Cupcakes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedCupcake = cupcakes.filter((cupcake) => cupcake.id !== id);
        setCupcakes(updatedCupcake); 
      })
      .catch((error) => console.error("Error deleting cupcake:", error));
  };

  const filteredCupcake = cupcakes.filter((cupcake) =>
    cupcake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <main>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CupcakeList cupcake={filteredCupcake} deleteCupcake={deleteCupcake}  /> 
    </main>
  );
}

export default CupcakePage;