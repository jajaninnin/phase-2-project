import React, { useState, useEffect } from "react";
import CupCakeNewForm from "./CupCakeNewForm";
import CupCakeList from "./CupCake";
import Search from "./Search";

function CupCakePage() {
  const [cupCake, setCupcake] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcake(data))
      .catch((error) => console.error("Error fetching cupCake data:", error));
  }, []);

  const addcupCake = (newcupCake) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newcupCake),
    })
      .then((response) => response.json())
      .then(() => {
        setcupCake([...cupCake, addcupCake]);
      })
      .catch((error) => console.error("Error adding new cupCake:", error));
  };

  // const deleteCupCake = (id) => {
  //   fetch(`http://localhost:6001/plants/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => {
  //       const updatedCupCake = pcupCake.filter((cupCake) => cupCake.id !== id);
  //       setCupCake(updatedCupCake); 
  //     })
  //     .catch((error) => console.error("Error deleting cupCake:", error));
  // };

  const filteredCupCake = cupCake.filter((cupCake) =>
    cupCake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <CupCakeNewForm addCupCake={addCupCake} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CupCakeList cupCake={filteredPlants} deleteCupCake={deleteCupCake} /> 
    </main>
  );
}

export default CupCakePage;