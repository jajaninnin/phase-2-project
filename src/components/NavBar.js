import React from "react";
import { Link } from 'react-router-dom';  // so we they can be links directed to sep pages

function NavBar() {
  return (
    <header>
      <span className="logo-section">
        <span className="logo" role="img">
          🧁
        </span>
        Cupcake Shop 
      </span>
      <span className="headers">
        <Link className="header-link" to='/'>Home</Link>
        <Link className="header-link" to='/cupcakelist'>Cupcake List</Link>
        <Link className="header-link" to='/cupcakenewform'>Cupcake Form</Link>
      </span>
    </header>
  );
}

export default NavBar;
