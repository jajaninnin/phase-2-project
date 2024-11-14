import React from "react";
import { Link } from 'react-router-dom';  

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Cupcake Shop!</h1>
      <p>
        In 2024, Janine, Karina, and Ron came together to establish their cupcake shop, 
        driven by their shared passion for all things sweet and delicious. They combined 
        their creativity and love for desserts to create a space where customers can indulge 
        in unique, flavorful cupcakes made with quality ingredients and a touch of their 
        founders' genuine enthusiasm for baking.
      </p>

      <div className="shop-images">
        <img src="https://th.bing.com/th/id/OIG2.99E5x2483uBUSn3OYBET?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="" />
        <img src="https://th.bing.com/th/id/OIG2.DaBh47RD_acmioX1ecpO?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="" />
        <img src="https://th.bing.com/th/id/OIG2.JiuKHN1bi9atRn77F0sL?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="" />
        <img src="https://th.bing.com/th/id/OIG2.99E5x2483uBUSn3OYBET?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="" />
      </div>

      <Link to="/cupcakelist" className="button-link">Explore Our Cupcakes</Link>

       </div>
  );
}

export default Home;