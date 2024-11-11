import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
function CupcakeNewForm() {
  const {cupcakes, setCupcakes} = useOutletContext();
  const navigate = useNavigate();
  const addCupcake = (newCupcake) => {
    fetch("http://localhost:3000/cupcakes", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newCupcake),
    })
      .then((response) => response.json())
      .then(() => {
        setCupcakes([...cupcakes, newCupcake]);
        navigate('/cupcakelist');
      })
      .catch((error) => console.error("Error adding new cupcake:", error));
  };
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCupcake(formData);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-cupcake-form">
      <h2>New Cupcake</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Cupcake Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">Add cupcake</button>
      </form>
    </div>
  );
}

export default CupcakeNewForm;