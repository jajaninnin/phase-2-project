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
        <img src="https://files.oaiusercontent.com/file-vw3eShbtN2DfGHfkREqwcuZV?se=2024-11-12T00%3A42%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De321779f-5263-49bd-a13f-b8286667590d.webp&sig=OPwOBcjoBIy8qavWKoduzYTozYlqQGSIRLoTZmwyoMY%3D" alt="" />
        <img src="https://files.oaiusercontent.com/file-zk4xGjmk4iRzNyPiUDPOH7s4?se=2024-11-12T00%3A44%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D51abe5c2-bf6a-4488-9060-cc6d77f5a709.webp&sig=2J4kqPTv9hyje/N4OtiWW8jxkV05I9G2QbnbL6pKOes%3D" alt="" />
        <img src="https://i.pinimg.com/736x/23/f4/97/23f4975928a368442ae5104d074b5981.jpg" alt="" />
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
