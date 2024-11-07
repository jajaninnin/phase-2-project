import React from "react";
import CupCakeCard from "./CupCakeCard";

function CupCakeList({ cupCake, deleteCupCake }) {
  return (
    <ul className="cards">
      {cupCake.map((cupCake) => (
        <PlantCard
          key={cupCake.id}
          cupCake={cupCake}
          cupCakeImgs={cupCake.image}
          prices={cupCake.price}
          deleteCupCake={deleteCupCake} 
        />
      ))}
    </ul>
  );
}

export default CupCakeList;