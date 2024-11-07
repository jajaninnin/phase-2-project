import React from "react";
import NavBar from "./components/NavBar";
import CupCakePage from "./components/CupCakePage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app">
      <Home />
      <NavBar />
      <CupCakePage />
    </div>
  );
}

export default App;
