import React, { useEffect, useState } from "react";

function Reviews() {
  const [ reviews, setReviews ] = useState([]); // array form in the db.json of the reviews
  // state per input, not necessary
  // const { name, setName } = useState("");
  // const { review, setReview } = useState("");
  // const { stars, setStars } = useState(5)

  const [formData, setFormData] = useState({   // one state with an empty object
    name: "",
    review: "",
    stars: 5,      //set a default value of 5
  });

  const { name, review, stars } = formData // destructured so you can call them indiv on the input form later

  // useEffect to fetch all the reviews from db.json
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  })
  
  const addReview = (newReview) => {
    fetch("http://localhost:3000/reviews", {
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

  const handleChange = (e) => {
    const { name, value } = e.target; //key on the input form, so will monitor changes on the value and name keys
    setFormData((formData) => {     // calling setFormData to update the state, pass a CB func
      return {...formData,    // returns an object, making a copy of the array using spreadOp
      [name]: value   // will handle change or Update on whatever name key and value is inputed
      }               // we do this so we dont mutate state directly, only commit to a certain property, will update DOM
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData); //using POst, delivering the input to be Posted on the db.json
    setFormData({       //clearing the form by setting the values to empty string or default value
      name: "",
      review: "",
      stars: 5,
    });
  };

  //mapping all the reviews from db.json
  const allReviews = reviews.map((review) => {
    return ( 
      <article className="card" key={review.id}>
        <p>{review.name}</p>
        <p>"{review.review}"</p>
        <p>Stars: {"⭐️".repeat(review.stars)}</p>
      </article>
    )
  })

  return (
    <div className="review-form">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="review"
          placeholder="Your review here"
          value={review}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stars"
          min="0"
          max="5"
          step="1"
          value={stars}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">Add Review</button>
      </form>
      <div>
        <h2>Read the Reviews:</h2>
        {allReviews}
      </div>
    </div>
  );
}

export default Reviews;