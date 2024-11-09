import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CupcakeCard from "./CupcakeCard";
import Search from "./Search";

function CupcakePage() {
  const {cupcakes} = useOutletContext(); // coming from App
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCupcake = cupcakes.filter((cupcake) =>
    cupcake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <main>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul className="cards">
      {filteredCupcake.map((cupcake) => (
        <CupcakeCard
          key={cupcake.id}
          id={cupcake.id}
          name={cupcake.name}
          img={cupcake.image}
          price={cupcake.price}
        />
      ))}
    </ul>
    </main>
  );
}

export default CupcakePage;