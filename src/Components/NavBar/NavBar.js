import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/" >Home</Link>
        <Link to="/About" >About</Link>
        <Link to="/Contact" >Contact</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
