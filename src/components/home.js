import React from "react";
import { Link } from 'react-router-dom';  

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Cupcake Shop!</h1>
      <p>
        In 2024, Karina, Janine, and Ron came together to establish their cupcake shop, 
        driven by their shared passion for all things sweet and delicious. They combined 
        their creativity and love for desserts to create a space where customers can indulge 
        in unique, flavorful cupcakes made with quality ingredients and a touch of their 
        founders' genuine enthusiasm for baking.
      </p>

      <div className="shop-images">
        <img src="https://i.pinimg.com/736x/27/2a/02/272a02a8f5ddb5b39c2151c2060ec644.jpg" alt="" />
        <img src="https://i.pinimg.com/736x/a4/e2/d3/a4e2d361b506928c67e92defbbbd278b.jpg" alt="" />
        <img src="https://i.pinimg.com/736x/23/f4/97/23f4975928a368442ae5104d074b5981.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/ca/60/ba/ca60ba986b3b817992382e2303ee2e2c.jpg" alt="" />
        <img src="https://i.pinimg.com/736x/74/80/cf/7480cf0f5a15b5e50e37e4a959d40ccf.jpg" alt="" />
      </div>

      <Link to="/cupcakelist" className="button-link">Explore Our Cupcakes</Link>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@cupcakeshop.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Sweet Lane, Cupcake City, CA 98765</p>
      </div>
    </div>
  );
}

export default Home;
