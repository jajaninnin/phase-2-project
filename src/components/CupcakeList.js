import React, { useState } from "react"; // Import React and useState for managing component state
import { useOutletContext } from "react-router-dom"; // Import useOutletContext to access data from the parent route
import CupcakeCard from "./CupcakeCard"; // Import the CupcakeCard component for displaying each cupcake
import Search from "./Search"; // Import the Search component for filtering cupcakes

// Define the CupcakeList component
function CupcakeList() {
  // Get the cupcakes data from the parent route using useOutletContext
  const { cupcakes } = useOutletContext();

  // Initialize state for the search term and sorting order
  const [searchTerm, setSearchTerm] = useState(""); // searchTerm holds the current search input
  const [sortOrder, setSortOrder] = useState("asc"); // sortOrder holds the current sorting order ("asc" or "desc")

  // Function to toggle the sort order between ascending and descending
  const handleSort = () => {
    // Toggle sortOrder: if it's "asc", set to "desc", otherwise set to "asc"
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  // Filter and sort the cupcakes based on the search term and sort order
  const filteredCupcake = cupcakes
    .filter((cupcake) =>
      // Filter cupcakes whose names include the searchTerm (case-insensitive)
      cupcake.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sort the filtered cupcakes based on the price
      if (sortOrder === "asc") {
        return a.price - b.price; // Sort in ascending order if sortOrder is "asc"
      } else {
        return b.price - a.price; // Sort in descending order if sortOrder is "desc"
      }
    });

  // Render the component's UI
  return (
    <main>
      {/* Render the Search component, passing in searchTerm and setSearchTerm as props */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Button to toggle sorting order; calls handleSort on click */}
      <button className="impt-button" onClick={handleSort}>
        {/* Button text changes based on the current sortOrder */}
        Sort by Price: {sortOrder === "asc" ? "High to Low" : "Low to High"}
      </button>

      {/* Render a list of filtered and sorted cupcakes */}
      <ul className="cards">
        {filteredCupcake.map((cupcake) => (
          // For each cupcake, render a CupcakeCard component
          <CupcakeCard
            key={cupcake.id} // Unique key for each list item
            id={cupcake.id} // Pass the cupcake ID as a prop
            name={cupcake.name} // Pass the cupcake name as a prop
            img={cupcake.image} // Pass the cupcake image URL as a prop
            price={cupcake.price} // Pass the cupcake price as a prop
          />
        ))}
      </ul>
    </main>
  );
}

// Export the CupcakeList component as the default export
export default CupcakeList;

