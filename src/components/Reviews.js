import React, { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order state

  const BASE_URL = process.env.REACT_APP_JSON_SERVER

  useEffect(() => {
    fetch(BASE_URL + "/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [BASE_URL]);

  const addReview = (newReview) => {
    fetch(BASE_URL + "/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((review) => {
        setReviews([...reviews, review]);
      })
      .catch((error) => console.error("Error adding new review:", error));
  };

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    stars: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
    setFormData({
      name: "",
      review: "",
      stars: 5,
    });
  };

  // Sort the reviews by stars
  const sortedReviews = reviews
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.stars - b.stars;
      } else {
        return b.stars - a.stars;
      }
    })
    .map((review) => {
      return (
        <article className="card" key={review.id}>
          <p>{review.name}</p>
          <p>"{review.review}"</p>
          <p>Stars: {"⭐️".repeat(review.stars)}</p>
        </article>
      );
    });

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="review-form">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="review"
          placeholder="Your review here"
          value={formData.review}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stars"
          min="0"
          max="5"
          step="1"
          placeholder="Stars"
          value={formData.stars}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          Add Review
        </button>
      </form>

      <div>
        <h2>Read the Reviews:</h2>

        {/* Sort Button */}
        <button className="submit-button" onClick={toggleSortOrder}>
          Sort by Stars: {sortOrder === "asc" ? "High to Low" : "Low to High"}
        </button>

        {sortedReviews}
      </div>
    </div>
  );
}

export default Reviews;
