import React from "react";
import CupcakeCard from "./CupcakeCard";

function CupcakeList({ cupcake, deleteCupcake }) {
  return (
    <ul className="cards">
      {cupcake.map((cupcake) => (
        <CupcakeCard
          key={cupcake.id}
          cupcake={cupcake}
          cupcakeImgs={cupcake.image}
          prices={cupcake.price}
          deleteCupcake={deleteCupcake} 
        />
      ))}
    </ul>
  );
}

export default CupcakeList;