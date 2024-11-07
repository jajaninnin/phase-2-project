import React, { useState, useEffect } from "react";
import CupCakeNewForm from "./CupCakeNewForm";
import CupCakeList from "./CupcakeList";
import Search from "./Search";

function CupCakePage() {
  const [cupCake, setCupCake] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Cupcakes")
      .then((response) => response.json())
      .then((data) => setCupCake(data))
      .catch((error) => console.error("Error fetching cupCake data:", error));
  }, []);

  const addCupCake = (newcupCake) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newcupCake),
    })
      .then((response) => response.json())
      .then(() => {
        setCupCake([...cupCake, newcupCake]);
      })
      .catch((error) => console.error("Error adding new cupCake:", error));
  };

  const deleteCupCake = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedCupCake = cupCake.filter((cupCake) => cupCake.id !== id);
        setCupCake(updatedCupCake); 
      })
      .catch((error) => console.error("Error deleting cupCake:", error));
  };

  const filteredCupCake = cupCake.filter((cupCake) =>
    cupCake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <main>
      <CupCakeNewForm addCupCake={addCupCake} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CupCakeList cupCake={filteredCupCake} deleteCupCake={deleteCupCake}  /> 
    </main>
  );
}

export default CupCakePage;