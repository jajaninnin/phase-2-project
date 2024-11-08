import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <span className="logo-section">
        <span className="logo" role="img">
          🧁
        </span>
        Cupcake Shop 
      </span>
      <Link className="header-link" to='/'>Home</Link>
      <Link className="header-link" to='/cupcakelist'>Cupcake List</Link>
      <Link className="header-link" to='/cupcakenewform'>Cupcake Form</Link>
    </header>
  );
}

export default NavBar;
