import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h1 className="Logo">beFriend</h1>
      <ul className="headerCenter">
        <Link to="/">
          <li className="menuItem">Home</li>
        </Link>
        <li className="menuItem">Community</li>
        <li className="menuItem">About Us</li>
        <li className="menuItem">Workshop</li>
      </ul>
      <div className="headerLeft">
        <Link to="/SignUp">
          <div className="signUp">Sign Up</div>
        </Link>
        <Link to="/Login">
          <div className="login">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
