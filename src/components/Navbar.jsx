/* File: Navbar.jsx */
import React from "react";
import "../styling/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SkyTide</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Skytide</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="signup">Signup</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
