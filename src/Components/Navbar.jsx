import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location=useLocation()
  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        
        <Link to={"/login"} state={{location}} >
        <button data-cy="navbar-login-button">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
