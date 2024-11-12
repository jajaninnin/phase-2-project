import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CupcakeCard from "./CupcakeCard";
import Search from "./Search";

function CupcakeList() {
  const { cupcakes } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 

 
  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

 
  const filteredCupcake = cupcakes
    .filter((cupcake) =>
      cupcake.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price; 
      } else {
        return b.price - a.price; 
      }
    });

  return (
    <main>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <button className="impt-button" onClick={handleSort}>
        Sort by Price: {sortOrder === "asc" ? "High to Low" : "Low to High"}
      </button>

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

export default CupcakeList;
