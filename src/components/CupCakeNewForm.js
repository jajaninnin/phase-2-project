import React, { useState } from "react";
function CupCakeNewForm({ addCupCake }) {
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
    addCupCake(formData);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-cupcake-form">
      <h2>New CupCake</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="CupCake name"
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
        <button type="submit">Add CupCake</button>
      </form>
    </div>
  );
}

export default CupCakeNewForm;